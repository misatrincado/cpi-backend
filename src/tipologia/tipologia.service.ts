import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tipologia } from './tipologia.entity';

@Injectable()
export class TipologiaService {
    constructor(
        @InjectRepository(Tipologia)
        private readonly tipologiaRepository: Repository<Tipologia>,
    ) { }

    async findAll() {
        const getAll = await this.tipologiaRepository.find()
        return getAll
    }
}
