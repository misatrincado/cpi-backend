import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comuna } from './comuna.entity';

@Injectable()
export class ComunaService {
    constructor(
        @InjectRepository(Comuna)
        private readonly comunaRepository: Repository<Comuna>,
    ) { }

    async findAll() {
        const getAll = await this.comunaRepository.find()
        return getAll
    }
}
