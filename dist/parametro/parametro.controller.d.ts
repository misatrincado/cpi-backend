import { CreateParametroDto } from './dto/create.dto';
import { ParametroService } from './parametro.service';
export declare class ParametroController {
    private readonly parametroService;
    constructor(parametroService: ParametroService);
    findBySubambito(id: string): Promise<{
        data: import("./parametro.entity").Parametro[];
    }>;
    create(dto: CreateParametroDto): Promise<{
        data: import("./parametro.entity").Parametro;
    }>;
}
