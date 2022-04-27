import { Repository } from 'typeorm';
import { CreateIndicadoraDto } from './dto/create.dto';
import { UpdateIndicadoraDto } from './dto/update.dto';
import { Indicador } from './indicador.entity';
export declare class IndicadorService {
    private readonly inidicadorRepository;
    constructor(inidicadorRepository: Repository<Indicador>);
    findByParametro(id: string): Promise<Indicador[]>;
    create(dto: CreateIndicadoraDto): Promise<Indicador>;
    update(dto: UpdateIndicadoraDto): Promise<Indicador & UpdateIndicadoraDto>;
}
