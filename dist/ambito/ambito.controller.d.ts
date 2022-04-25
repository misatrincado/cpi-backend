import { AmbitoService } from './ambito.service';
export declare class AmbitoController {
    private readonly ambitoService;
    constructor(ambitoService: AmbitoService);
    findAll(): Promise<{
        data: import("./ambito.entity").Ambito[];
    }>;
}
