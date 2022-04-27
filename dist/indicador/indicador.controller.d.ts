import { CreateIndicadoraDto } from './dto/create.dto';
import { UpdateIndicadoraDto } from './dto/update.dto';
import { IndicadorService } from './indicador.service';
export declare class IndicadorController {
    private readonly indicadorService;
    constructor(indicadorService: IndicadorService);
    findByParametro(id: string): Promise<{
        data: import("./indicador.entity").Indicador[];
    }>;
    create(dto: CreateIndicadoraDto): Promise<{
        data: import("./indicador.entity").Indicador;
    }>;
    update(dto: UpdateIndicadoraDto): Promise<{
        data: import("./indicador.entity").Indicador & UpdateIndicadoraDto;
    }>;
}
