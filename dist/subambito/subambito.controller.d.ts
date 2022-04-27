import { CreateSubambitoDto } from './dto/createSubambito.dto';
import { UpdateSubambitoDto } from './dto/update.dto';
import { SubambitoService } from './subambito.service';
export declare class SubambitoController {
    private readonly subAmbitoService;
    constructor(subAmbitoService: SubambitoService);
    findByAmbito(id: string): Promise<{
        data: import("./subambito.entity").Subambito[];
    }>;
    obtainWithParamsIndica(idAmbito: string): Promise<{
        data: {
            parametros: {
                indicadores: import("../indicador/indicador.entity").Indicador[];
                id: number;
                subambito: number;
                nombre: string;
                desc: string;
                activo: boolean;
                created: string;
            }[];
            id: number;
            ambito: number;
            nombre: string;
            desc: string;
            activo: boolean;
            created: string;
        }[];
    }>;
    create(dto: CreateSubambitoDto): Promise<{
        data: import("./subambito.entity").Subambito;
    }>;
    update(dto: UpdateSubambitoDto): Promise<{
        data: import("./subambito.entity").Subambito & UpdateSubambitoDto;
    }>;
}
