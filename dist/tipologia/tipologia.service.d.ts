import { Repository } from 'typeorm';
import { Tipologia } from './tipologia.entity';
export declare class TipologiaService {
    private readonly tipologiaRepository;
    constructor(tipologiaRepository: Repository<Tipologia>);
    findAll(): Promise<Tipologia[]>;
}
