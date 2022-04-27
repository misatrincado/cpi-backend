import { Indicador } from 'src/indicador/indicador.entity';
import { Parametro } from 'src/parametro/parametro.entity';
import { Repository } from 'typeorm';
import { CreateSubambitoDto } from './dto/createSubambito.dto';
import { UpdateSubambitoDto } from './dto/update.dto';
import { Subambito } from './subambito.entity';
export declare class SubambitoService {
    private readonly subambitoRepository;
    private readonly parametroRepository;
    private readonly indicadorRepository;
    constructor(subambitoRepository: Repository<Subambito>, parametroRepository: Repository<Parametro>, indicadorRepository: Repository<Indicador>);
    findByAmbito(id: string): Promise<Subambito[]>;
    obtainWithParamsIndica(idAmbito: string): Promise<{
        parametros: {
            indicadores: Indicador[];
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
    }[]>;
    create(dto: CreateSubambitoDto): Promise<Subambito>;
    update(dto: UpdateSubambitoDto): Promise<Subambito & UpdateSubambitoDto>;
}
