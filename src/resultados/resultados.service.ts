import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ambito } from 'src/ambito/ambito.entity';
import { Calificacion } from 'src/calificacion/calificacion.entity';
import { Parametro } from 'src/parametro/parametro.entity';
import { Subambito } from 'src/subambito/subambito.entity';
import { Repository } from 'typeorm';
import { CreateResultadosDto } from './dto/create.dto';
import { Resultados } from './resultados.entity';
import { obtainIndicatorsFilled, promedioAmbito } from './utils/promedio';

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
        @InjectRepository(Calificacion)
        private readonly calificacionRepository: Repository<Calificacion>,
    ) { }

    async findByCalificacion(id: string) {
        const getAll = await this.resultadosRepository.find({
            where: { calificacion: id },
            relations: ['indicador', 'indicador.parametro']
        })

        const send = getAll.map((item:any) => {
            return {
                ...item,
                idIndicador: item.indicador.id,
                idParametro: item.indicador.parametro.id
            }
        })

        return send
    }

    async obtainAverages(idCalification: string) {
        const listResults = await this.resultadosRepository.find({
            where: { calificacion: idCalification },
            relations: ['indicador', 'indicador.parametro']
        })
        const listAmbito = await this.ambitoRepository.find()

        const send = await Promise.all(
            listAmbito.map(async item => {
                const listSubambito = await this.subambitoRepository.find({
                    where: {
                        ambito: item.id
                    },
                    relations: ['ambito']
                })
                const listParametros = await this.parametroRepository.find({
                    relations: ['subambito']
                })
                const calculo = promedioAmbito(listResults, listSubambito, listParametros)
                const indicadoresRellenos = obtainIndicatorsFilled(listResults, listSubambito, listParametros)
                return {
                    ...item,
                    amount: calculo,
                    indicadoresLength: indicadoresRellenos,
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
                console.log("item", item)
                const elem = new Resultados()
    
                if(!item.id) {
                    const finder = await this.resultadosRepository.findOne({
                        indicador: item.idIndicador,
                        calificacion: item.idCalificacion
                    })
                    if(finder) {
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
}
