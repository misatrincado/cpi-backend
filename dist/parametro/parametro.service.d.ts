import { Repository } from 'typeorm';
import { CreateParametroDto } from './dto/create.dto';
import { Parametro } from './parametro.entity';
export declare class ParametroService {
    private readonly parametroRepository;
    constructor(parametroRepository: Repository<Parametro>);
    findBySubambito(id: string): Promise<Parametro[]>;
    create(dto: CreateParametroDto): Promise<Parametro>;
}
