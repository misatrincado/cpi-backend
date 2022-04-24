import { Repository } from 'typeorm';
import { CreateProyectoDto } from './dto/create.dto';
import { Proyecto } from './proyecto.entity';
export declare class ProyectoService {
    private readonly empresaRepository;
    constructor(empresaRepository: Repository<Proyecto>);
    findAll(): Promise<Proyecto[]>;
    create(dto: CreateProyectoDto): Promise<Proyecto>;
}
