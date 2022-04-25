import { Repository } from 'typeorm';
import { CreateSubambitoDto } from './dto/createSubambito.dto';
import { Subambito } from './subambito.entity';
export declare class SubambitoService {
    private readonly subambitoRepository;
    constructor(subambitoRepository: Repository<Subambito>);
    findByAmbito(id: string): Promise<Subambito[]>;
    create(dto: CreateSubambitoDto): Promise<Subambito>;
}
