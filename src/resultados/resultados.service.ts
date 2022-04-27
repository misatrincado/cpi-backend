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

    async create(dto: CreateResultadosDto) {
        const elem = new Resultados()
        elem.indicador = dto.idIndicador
        elem.calificacion = dto.idIndicador
        elem.valor = dto.valor
        elem.puntos = dto.puntos

        return this.resultadosRepository.save(elem)
    }

    async createMany(dto: CreateResultadosDto[]) {
        const elems = dto.map(item => {
            const elem = new Resultados()
            elem.indicador = item.idIndicador
            elem.calificacion = item.idIndicador
            elem.valor = item.valor
            elem.puntos = item.puntos
            return this.resultadosRepository.save(elem)
        })
        return elems
    }
}
