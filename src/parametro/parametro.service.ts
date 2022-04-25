import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateParametroDto } from './dto/create.dto';
import { Parametro } from './parametro.entity';

@Injectable()
export class ParametroService {
    constructor(
        @InjectRepository(Parametro)
        private readonly parametroRepository: Repository<Parametro>,
    ) { }

    async findBySubambito(id: string) {
        const getAll = await this.parametroRepository.find({
            where: { subambito: id }
        })
        return getAll
    }
    async create(dto: CreateParametroDto) {
        const elem = new Parametro()
        elem.subambito = dto.idSubambito
        elem.nombre = dto.nombre
        elem.desc = dto.desc
        elem.activo = dto.activo

        const res = await this.parametroRepository.save(elem)
        console.log("res create Parametro", res)
        return res
    }
}
