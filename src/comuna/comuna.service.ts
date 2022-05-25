import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comuna } from './comuna.entity';
import { UpdateComunaDto } from './dto/update.dto';

@Injectable()
export class ComunaService {
    constructor(
        @InjectRepository(Comuna)
        private readonly comunaRepository: Repository<Comuna>,
    ) { }

    async findAll() {
        const getAll = await this.comunaRepository.find({
            order: { nombre: 'ASC' }
        })
        return getAll
    }

    async update(dto: UpdateComunaDto) {
        const find = await this.comunaRepository.findOne({
            id: dto.id,
        })
        if(find) {
          const update = Object.assign(find, dto)
           const saveDto = await this.comunaRepository.save(update)
           return saveDto;
        }
        return null
    }
}
