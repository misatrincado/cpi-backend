import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subambito } from 'src/subambito/subambito.entity';
import { Repository } from 'typeorm';
import { Ambito } from './ambito.entity';

@Injectable()
export class AmbitoService {
    constructor(
        @InjectRepository(Ambito)
        private readonly ambitoRepository: Repository<Ambito>,
        @InjectRepository(Subambito)
        private readonly subambitoRepository: Repository<Subambito>,
    ) { }

    async findAll() {
        const getAll = await this.ambitoRepository.find()

        const send = await Promise.all(
            getAll.map(async item => {
                const getSubambito = await this.subambitoRepository.find({
                    where: {
                        ambito: item.id
                    },
                    order: { nombre: 'ASC' }
                })
                return {
                    ...item,
                    subambitos: getSubambito
                }
            })
        )
        return send
    }
}
