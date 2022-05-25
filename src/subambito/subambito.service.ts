import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ambito } from 'src/ambito/ambito.entity';
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
        @InjectRepository(Ambito)
        private readonly ambitoRepository: Repository<Ambito>,
    ) { }

    async findByAmbito(id: string) {
        const getAll = await this.subambitoRepository.find({
            where: { ambito: id },
        })
        return getAll
    }

    async obtainFromAmbito(idTipo: string) {
        const getAmbito = await this.ambitoRepository.find()
        const send = await Promise.all(
            getAmbito.map(async itemAmbito => {
                const obtain = await this.obtainWithParamsIndica(itemAmbito.id, idTipo)
                return {
                    ...itemAmbito,
                    subambitos: obtain
                }
            })
        )
        return send
    }
    async obtainWithParamsIndica(idAmbito: number, idTipo: string) {
        const getSubambito = await this.subambitoRepository.find({
            where: {
                ambito: idAmbito,
                activo: true
            },
            relations: ['ambito'],
            order: { nombre: 'ASC' }
        })
        const send = await Promise.all(
            getSubambito.map(async itemSub => {
                const getParametros = await this.parametroRepository.find({
                    where: { subambito: itemSub.id, activo: true },
                    order: { nombre: 'ASC' }
                })

                let parametros = []
                await Promise.all(
                    getParametros.map(async itemParam => {
                        const getIndicadores = await this.indicadorRepository.find({
                            where: { parametro: itemParam.id, tipologia: idTipo, activo: true },
                            order: { nombre: 'ASC' }
                        })
                        if (getIndicadores.length > 0) {
                            parametros.push({
                                ...itemParam,
                                indicadores: getIndicadores
                            })
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
