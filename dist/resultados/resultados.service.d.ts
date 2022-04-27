import { Repository } from 'typeorm';
import { CreateResultadosDto } from './dto/create.dto';
import { Resultados } from './resultados.entity';
export declare class ResultadosService {
    private readonly resultadosRepository;
    constructor(resultadosRepository: Repository<Resultados>);
    create(dto: CreateResultadosDto): Promise<Resultados>;
    createMany(dto: CreateResultadosDto[]): Promise<Promise<Resultados>[]>;
}
