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
import { obtainIndicatorsFilled, obtainIndicatorsQty, promedioAmbito, promedioSubambito } from './utils/promedio';
import * as fs from 'fs';
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
        listResults = listResults.filter((item:any) => item.indicador.activo)
        
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

    async obtainAveragesPDF(idCalificacion: string) {
        let doc = new PDFDocument({ margin: 30, size: 'A4' }) 
        let data = this.obtainAverages(idCalificacion)
        doc.pipe(fs.createWriteStream("./document.pdf"));

        const table = { 
            title: 'asda',
            headers: [ 'ambitos', 'subambitos' ],
            datas: data,
            rows: data,
          }
        
        doc.table(table, { /* options */ }, () => { /* callback */ } );
        doc.end();
    }
}
