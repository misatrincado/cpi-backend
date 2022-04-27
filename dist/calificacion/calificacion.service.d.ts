import { Repository } from 'typeorm';
import { Calificacion } from './calificacion.entity';
import { CreateCalificacionDto } from './dto/create.dto';
export declare class CalificacionService {
    private readonly calificacionRepository;
    constructor(calificacionRepository: Repository<Calificacion>);
    findByProyecto(id: string): Promise<Calificacion[]>;
    create(dto: CreateCalificacionDto): Promise<Calificacion>;
}
