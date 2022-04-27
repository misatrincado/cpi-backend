import { CreateParametroDto } from './dto/create.dto';
import { UpdatesParametroDto } from './dto/update.dto';
import { ParametroService } from './parametro.service';
export declare class ParametroController {
    private readonly parametroService;
    constructor(parametroService: ParametroService);
    findBySubambito(id: string): Promise<{
        data: import("./parametro.entity").Parametro[];
    }>;
    obtainAllWithIndicators(id: string): Promise<{
        data: any[];
    }>;
    create(dto: CreateParametroDto): Promise<{
        data: import("./parametro.entity").Parametro;
    }>;
    update(dto: UpdatesParametroDto): Promise<{
        data: import("./parametro.entity").Parametro & UpdatesParametroDto;
    }>;
}
