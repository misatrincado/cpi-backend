import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateResultadosDto } from './dto/create.dto';
import { Resultados } from './resultados.entity';

@Injectable()
export class ResultadosService {
    constructor(
        @InjectRepository(Resultados)
        private readonly resultadosRepository: Repository<Resultados>,
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
    
                if(!elem.id) {
                    const finder = await this.resultadosRepository.findOne({
                        indicador: item.idIndicador
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
                if(item.id) {
                    elem.id
                }
                return this.resultadosRepository.save(elem)
            })
        )
        return elems
    }
}
