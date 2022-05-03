import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIndicadoraDto } from './dto/create.dto';
import { UpdateIndicadoraDto } from './dto/update.dto';
import { Indicador } from './indicador.entity';

@Injectable()
export class IndicadorService {
    constructor(
        @InjectRepository(Indicador)
        private readonly inidicadorRepository: Repository<Indicador>,
    ) { }

    async findByParametroTipo(idParam: string, idTipo: string) {
        const getAll = await this.inidicadorRepository.find({
            where: { parametro: idParam, tipologia: idTipo },
            relations: ['tipologia']
        })
        return getAll
    }
    async create(dto: CreateIndicadoraDto) {
        const elem = new Indicador()
        elem.tipologia = dto.idTipologia
        elem.parametro = dto.idParametro
        elem.nombre = dto.nombre
        elem.desc = dto.desc
        elem.unidad = dto.unidad
        elem.escala = dto.escala
        elem.activo = dto.activo

        const res = await this.inidicadorRepository.save(elem)
        console.log("res create Indicador", res)
        return res
    }

    async update(dto: UpdateIndicadoraDto) {
        console.log("dto",dto)
        const find = await this.inidicadorRepository.findOne({
            id: dto.id,
        })
        if(find) {
          const update = Object.assign(find, dto)
           const saveDto = await this.inidicadorRepository.save(update)
           return saveDto;
        }
        return null
    }
}
