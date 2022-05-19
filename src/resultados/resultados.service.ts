import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ambito } from 'src/ambito/ambito.entity';
import { Calificacion } from 'src/calificacion/calificacion.entity';
import { Indicador } from 'src/indicador/indicador.entity';
import { Parametro } from 'src/parametro/parametro.entity';
import { Subambito } from 'src/subambito/subambito.entity';
import { Repository } from 'typeorm';
import { CreateResultadosDto } from './dto/create.dto';
import { Resultados } from './resultados.entity';
import { obtainIndicatorsFilled, obtainIndicatorsQty, promedioAmbito, promedioParametro, promedioSubambito } from './utils/promedio';
import moment = require("moment");
const PDFDocument = require("pdfkit-table");
@Injectable()
export class ResultadosService {
    constructor(
        @InjectRepository(Resultados)
        private readonly resultadosRepository: Repository<Resultados>,
        @InjectRepository(Subambito)
        private readonly subambitoRepository: Repository<Subambito>,
        @InjectRepository(Ambito)
        private readonly ambitoRepository: Repository<Ambito>,
        @InjectRepository(Parametro)
        private readonly parametroRepository: Repository<Parametro>,
        @InjectRepository(Indicador)
        private readonly indicadorRepository: Repository<Indicador>,
        @InjectRepository(Calificacion)
        private readonly calificacionRepository: Repository<Calificacion>,
    ) { }

    async findByCalificacion(id: string) {
        const getAll = await this.resultadosRepository.find({
            where: { calificacion: id },
            relations: ['indicador', 'indicador.parametro']
        })

        const send = getAll.map((item: any) => {
            return {
                ...item,
                idIndicador: item.indicador.id,
                idParametro: item.indicador.parametro.id
            }
        })

        return send
    }

    async obtainAverages(idCalification: string) {
        const calificacion: any = await this.calificacionRepository.findOne({
            where: { id: idCalification },
            relations: ['proyecto', 'proyecto.tipologia']
        })
        let listResults = await this.resultadosRepository.find({
            where: { calificacion: idCalification },
            relations: ['indicador', 'indicador.parametro']
        })
        listResults = listResults.filter((item: any) => item.indicador.activo)

        const listAmbito = await this.ambitoRepository.find()

        const send = await Promise.all(
            listAmbito.map(async item => {
                const listSubambito = await this.subambitoRepository.find({
                    where: {
                        ambito: item.id,
                        activo: true
                    },
                    relations: ['ambito']
                })
                const listParametros = await this.parametroRepository.find({
                    where: {
                        activo: true
                    },
                    relations: ['subambito']
                })
                const listIndicadores = await this.indicadorRepository.find({
                    where: {
                        activo: true,
                        tipologia: calificacion.proyecto.tipologia.id,
                    },
                    relations: ['parametro']
                })
                const calculo = promedioAmbito(listResults, listSubambito, listParametros)
                const indicadoresRellenos = obtainIndicatorsFilled(listResults, listSubambito, listParametros)
                const qty = obtainIndicatorsQty(listSubambito, listParametros, listIndicadores)
                const subambitoAverages = listSubambito.map(itemSub => ({
                    amount: promedioSubambito(listResults, listParametros, itemSub.id)
                }))
                return {
                    ...item,
                    amount: calculo,
                    subambito: subambitoAverages,
                    indicadoresLength: {
                        amount: indicadoresRellenos,
                        qty
                    },
                }
            })
        )
        return send
    }

    async create(dto: CreateResultadosDto) {
        const elem = new Resultados()
        elem.indicador = dto.id
        elem.calificacion = dto.id
        elem.valor = dto.valor
        elem.puntos = dto.puntos

        return this.resultadosRepository.save(elem)
    }

    async createMany(dto: CreateResultadosDto[]) {
        const elems = await Promise.all(
            dto.map(async item => {
                const elem = new Resultados()

                if (!item.id) {
                    const finder = await this.resultadosRepository.findOne({
                        indicador: item.idIndicador,
                        calificacion: item.idCalificacion
                    })
                    if (finder) {
                        elem.id = finder.id
                    }
                } else {
                    elem.id = item.id
                }

                elem.indicador = item.idIndicador
                elem.calificacion = item.idCalificacion
                elem.valor = item.valor
                elem.puntos = item.puntos
                return this.resultadosRepository.save(elem)
            })
        )
        return elems
    }

    private async obtainWithParamsIndica(idAmbito: number, idTipo: string) {
        const getSubambito = await this.subambitoRepository.find({
            where: {
                ambito: idAmbito,
                activo: true
            },
            relations: ['ambito']
        })
        const send = await Promise.all(
            getSubambito.map(async itemSub => {
                const getParametros = await this.parametroRepository.find({
                    where: { subambito: itemSub.id, activo: true }
                })

                const parametros = await Promise.all(
                    getParametros.map(async itemParam => {
                        const getIndicadores = await this.indicadorRepository.find({
                            where: { parametro: itemParam.id, tipologia: idTipo, activo: true }
                        })
                        return {
                            ...itemParam,
                            indicadores: getIndicadores
                        }
                    })
                )

                return {
                    ...itemSub,
                    parametros
                }
            })
        )
        return send
    }

    async obtainAveragesPDF(idCalificacion: string, response) {
        const calificacion: any = await this.calificacionRepository.findOne({
            where: { id: idCalificacion },
            relations: ['proyecto', 'proyecto.tipologia']
        })

        const listResults = await this.findByCalificacion(idCalificacion)
        let data = await this.obtainAverages(idCalificacion)

        const listSubambito = await Promise.all(
            data.map(async itemAmbito => ({
                ...itemAmbito,
                subambito: await this.obtainWithParamsIndica(itemAmbito.id, calificacion.proyecto.tipologia.id)
            }))
        )
        const listParametros = await this.parametroRepository.find({
            where: {
                activo: true
            },
            relations: ['subambito']
        })

        const listSubambitoRepo = await this.subambitoRepository.find({
            where: {
                activo: true
            },
            relations: ['ambito']
        })

        // Inicio del PDF
        let doc = new PDFDocument({ margin: 30, size: 'A4', bufferPages: true, font: 'Helvetica' })
        const filename = calificacion.proyecto.nombre + '_' + (moment(new Date()).format('DD-MM-YY'))
        // Mapeo por ambito 
        data.map((itemAmbito) => {
            const subambitoListFilter = listSubambitoRepo.filter((item: any) => item.ambito.id === itemAmbito.id)
            const promedioAm = promedioAmbito(listResults, subambitoListFilter, listParametros)
            doc.fontSize(16)
            doc.font('Helvetica').text('ÁMBITO' + ` (${promedioAm}pts)`).font('Helvetica-Bold')
            doc.fontSize(24)
            doc.font('Helvetica-Bold').text(itemAmbito.nombre).moveDown(1)
            doc.fontSize(16)

            let getSubambitos = listSubambito.find((i: any) => i.id === itemAmbito.id)
            getSubambitos && getSubambitos.subambito.map((itemSubambito: any) => {
                const promedioSub = promedioSubambito(listResults, listParametros, itemSubambito) || 0
                doc.fontSize(16)
                doc.font('Helvetica').text('SUBÁMBITO' + ` (${promedioSub}pts)`);
                doc.fontSize(20)
                doc.font('Helvetica-Bold').text(itemSubambito.nombre).moveDown(2)

                itemSubambito.parametros.map((itemParametro: any) => {

                    doc.fontSize(14)
                    const table = {
                        title: itemParametro.nombre + ` (${promedioParametro(listResults, itemParametro.id)}pts)`,
                        headers: ["Indicador", 'Unidad', 'Valor', 'Puntos', 'Escala'],
                        rows: itemParametro.indicadores.map(item => {
                            const finder = listResults.find(i => i.idIndicador === item.id)
                            return [
                                item.nombre || ' ',
                                item.unidad || ' ',
                                finder?.valor || '',
                                finder?.puntos || 0,
                                item.escala || ' '
                            ]
                        }),
                    };
                    doc.table(table, {
                        padding: 5,
                        borderWidth: 1,
                        borderColor: '#000',
                        borderStyle: 'solid',
                        fontSize: 12,
                        headerRows: 1,
                        startY: doc.y + 20,
                        columnsSize: [250, 50, 50, 50, 150],
                    })
                    doc.moveDown(5)
                })
                doc.addPage()

            })
        })

        // Paginación y encabezados
        const range = doc.bufferedPageRange();
        for (let i = range.start; i < (range.start + range.count); i++) {
            doc.switchToPage(i);
            doc.fontSize(10)
            doc.image('assets/logo.png', doc.page.width - 175, 25, {width: 150})
            doc.font('Helvetica').text(calificacion.proyecto.nombre + ' - ' + calificacion.proyecto.tipologia.nombre,
                25,
                doc.page.height - 20,
                { height: 25, width: 200 });
            doc.font('Helvetica').text(`${i + 1} | ${range.count}`,
                520,
                doc.page.height - 20,
                { height: 25, width: 50, align: 'right' });
        }
        doc.end();

        response.set({
            'Content-Type': 'image/pdf',
            'Content-Disposition': `attachment; filename=${filename}.pdf`,
          });
        doc.pipe(response);
    }
}
