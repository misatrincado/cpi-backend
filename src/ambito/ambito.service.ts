import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ambito } from './ambito.entity';

@Injectable()
export class AmbitoService {
    constructor(
        @InjectRepository(Ambito)
        private readonly inidicadorRepository: Repository<Ambito>,
    ) { }

    async findAll() {
        const getAll = await this.inidicadorRepository.find()
        return getAll
    }
}
