import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIndicadoraDto } from './dto/create.dto';
import { Indicador } from './indicador.entity';

@Injectable()
export class IndicadorService {
    constructor(
        @InjectRepository(Indicador)
        private readonly inidicadorRepository: Repository<Indicador>,
    ) { }

    async findByParametro(id: string) {
        const getAll = await this.inidicadorRepository.find({
            where: { parametro: id }
        })
        return getAll
    }
    async create(dto: CreateIndicadoraDto) {
        const elem = new Indicador()
        elem.parametro = dto.idParametro
        elem.nombre = dto.nombre
        elem.desc = dto.desc
        elem.unidad = dto.unidad
        elem.escala = dto.escala
        elem.activo = dto.activo

        const res = await this.inidicadorRepository.save(elem)
        console.log("res create Indicador", res)
        return res
    }
}
