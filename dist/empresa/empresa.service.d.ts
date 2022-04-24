import { Repository } from 'typeorm';
import { CreateEmpresaDto } from './dto/createEmpresa.dto';
import { Empresa } from './empresa.entity';
export declare class EmpresaService {
    private readonly empresaRepository;
    constructor(empresaRepository: Repository<Empresa>);
    findAll(): Promise<Empresa[]>;
    create(dto: CreateEmpresaDto): Promise<Empresa>;
}
