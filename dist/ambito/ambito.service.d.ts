import { Repository } from 'typeorm';
import { Ambito } from './ambito.entity';
export declare class AmbitoService {
    private readonly inidicadorRepository;
    constructor(inidicadorRepository: Repository<Ambito>);
    findAll(): Promise<Ambito[]>;
}
