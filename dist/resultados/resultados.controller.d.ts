import { CreateResultadosDto } from './dto/create.dto';
import { ResultadosService } from './resultados.service';
export declare class ResultadosController {
    private readonly resultadosService;
    constructor(resultadosService: ResultadosService);
    create(dto: CreateResultadosDto): Promise<{
        data: import("./resultados.entity").Resultados;
    }>;
    createMany(dto: CreateResultadosDto[]): Promise<{
        data: Promise<import("./resultados.entity").Resultados>[];
    }>;
}
