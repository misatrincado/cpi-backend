import { TipologiaService } from './tipologia.service';
export declare class TipologiaController {
    private readonly tipologiaService;
    constructor(tipologiaService: TipologiaService);
    findAll(): Promise<{
        data: import("./tipologia.entity").Tipologia[];
    }>;
}
