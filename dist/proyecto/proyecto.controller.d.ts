import { CreateProyectoDto } from './dto/create.dto';
import { ProyectoService } from './proyecto.service';
export declare class ProyectoController {
    private readonly proyectoService;
    constructor(proyectoService: ProyectoService);
    findAll(): Promise<{
        data: import("./proyecto.entity").Proyecto[];
    }>;
    create(dto: CreateProyectoDto): Promise<{
        data: import("./proyecto.entity").Proyecto;
    }>;
}
