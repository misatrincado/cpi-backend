import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubambitoDto } from './dto/createSubambito.dto';
import { Subambito } from './subambito.entity';

@Injectable()
export class SubambitoService {
    constructor(
        @InjectRepository(Subambito)
        private readonly subambitoRepository: Repository<Subambito>,
    ) { }

    async findByAmbito(id: string) {
        const getAll = await this.subambitoRepository.find({
            where: { ambito: id }
        })
        return getAll
    }
    async create(dto: CreateSubambitoDto) {
        const elem = new Subambito()
        elem.ambito = dto.ambito
        elem.nombre = dto.nombre
        elem.desc = dto.desc
        elem.activo = dto.activo

        const res = await this.subambitoRepository.save(elem)
        console.log("res create Subambito", res)
        return res
    }
}
