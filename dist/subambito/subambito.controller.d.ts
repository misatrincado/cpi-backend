import { CreateSubambitoDto } from './dto/createSubambito.dto';
import { SubambitoService } from './subambito.service';
export declare class SubambitoController {
    private readonly subAmbitoService;
    constructor(subAmbitoService: SubambitoService);
    findByAmbito(id: string): Promise<{
        data: import("./subambito.entity").Subambito[];
    }>;
    create(dto: CreateSubambitoDto): Promise<{
        data: import("./subambito.entity").Subambito;
    }>;
}
