import { CalificacionService } from './calificacion.service';
import { CreateCalificacionDto } from './dto/create.dto';
export declare class CalificacionController {
    private readonly calificacionService;
    constructor(calificacionService: CalificacionService);
    findAll(): Promise<import("./calificacion.entity").Calificacion[]>;
    create(dto: CreateCalificacionDto): Promise<{
        data: import("./calificacion.entity").Calificacion;
    }>;
}
