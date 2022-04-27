import { Indicador } from 'src/indicador/indicador.entity';
import { Repository } from 'typeorm';
import { CreateParametroDto } from './dto/create.dto';
import { UpdatesParametroDto } from './dto/update.dto';
import { Parametro } from './parametro.entity';
export declare class ParametroService {
    private readonly parametroRepository;
    private readonly indicatorRepository;
    constructor(parametroRepository: Repository<Parametro>, indicatorRepository: Repository<Indicador>);
    findBySubambito(id: string): Promise<Parametro[]>;
    obtainAllWithIndicators(id: string): Promise<any[]>;
    create(dto: CreateParametroDto): Promise<Parametro>;
    update(dto: UpdatesParametroDto): Promise<Parametro & UpdatesParametroDto>;
}
