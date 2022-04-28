import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Indicador } from 'src/indicador/indicador.entity';
import { Parametro } from 'src/parametro/parametro.entity';
import { Repository } from 'typeorm';
import { CreateSubambitoDto } from './dto/createSubambito.dto';
import { UpdateSubambitoDto } from './dto/update.dto';
import { Subambito } from './subambito.entity';

@Injectable()
export class SubambitoService {
    constructor(
        @InjectRepository(Subambito)
        private readonly subambitoRepository: Repository<Subambito>,
        @InjectRepository(Parametro)
        private readonly parametroRepository: Repository<Parametro>,
        @InjectRepository(Indicador)
        private readonly indicadorRepository: Repository<Indicador>,
    ) { }

    async findByAmbito(id: string) {
        const getAll = await this.subambitoRepository.find({
            where: { ambito: id },
        })
        return getAll
    }

    async obtainWithParamsIndica(idAmbito: string) {
        const getSubambito = await this.subambitoRepository.find({
            where: {
                ambito: idAmbito
            },
            relations: ['ambito']
        })
        const send = await Promise.all(
            getSubambito.map(async itemSub => {
                const getParametros = await this.parametroRepository.find({
                    where: { subambito: itemSub.id }
                })

                const parametros = await Promise.all(
                    getParametros.map(async itemParam => {
                        const getIndicadores = await this.indicadorRepository.find({
                            where: { parametro: itemParam.id }
                        })
                        console.log("getIndicadores",getIndicadores)
                        return {
                            ...itemParam,
                            indicadores: getIndicadores
                        }
                    })
                )

                return {
                    ...itemSub,
                    parametros
                }
            })
        )
        return send
    }
    async create(dto: CreateSubambitoDto) {
        const elem = new Subambito()
        elem.ambito = dto.ambito
        elem.nombre = dto.nombre
        elem.desc = dto.desc
        elem.activo = dto.activo

        const res = await this.subambitoRepository.save(elem)
        console.log("res create Subambito", res)
        return res
    }

    async update(dto: UpdateSubambitoDto) {
        const find = await this.subambitoRepository.findOne({
            id: dto.id
        })
        if(find) {
          const update = Object.assign(find, dto)
           const saveDto = await this.subambitoRepository.save(update)
           return saveDto;
        }
        return null
    }
}
