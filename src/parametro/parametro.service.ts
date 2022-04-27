import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Indicador } from 'src/indicador/indicador.entity';
import { Repository } from 'typeorm';
import { CreateParametroDto } from './dto/create.dto';
import { UpdatesParametroDto } from './dto/update.dto';
import { Parametro } from './parametro.entity';

@Injectable()
export class ParametroService {
    constructor(
        @InjectRepository(Parametro)
        private readonly parametroRepository: Repository<Parametro>,
        @InjectRepository(Indicador)
        private readonly indicatorRepository: Repository<Indicador>,
    ) { }

    async findBySubambito(id: string) {
        const getAll = await this.parametroRepository.find({
            where: { subambito: id }
        })
        return getAll
    }

    async obtainAllWithIndicators(id: string) {
        // Si el id es 0 se envian todos los subambitos
        let getParametro;
        if(id === '0') {
            getParametro = await this.parametroRepository.find()
        } else {
            getParametro = await this.parametroRepository.find({
                where: { subambito: id }
            })
        }

        const send = await Promise.all(
            getParametro.map(async i => {
                const getIndicadores = await this.indicatorRepository.find({
                    where: { parametro: i.id }
                })
                return {
                    ...i,
                    indicadores: getIndicadores
                }
            })
        )
            console.log("send",send)
        return send
    }
    async create(dto: CreateParametroDto) {
        const elem = new Parametro()
        elem.subambito = dto.idSubambito
        elem.nombre = dto.nombre
        elem.desc = dto.desc
        elem.activo = dto.activo

        const res = await this.parametroRepository.save(elem)
        console.log("res create Parametro", res)
        return res
    }

    async update(dto: UpdatesParametroDto) {
        const find = await this.parametroRepository.findOne({
            id: dto.id
        })
        if(find) {
          const update = Object.assign(find, dto)
           const saveDto = await this.parametroRepository.save(update)
           return saveDto;
        }
        return null
    }
}
