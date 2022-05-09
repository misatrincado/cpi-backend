import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProyectoDto } from './dto/create.dto';
import { UpdateProyectoDto } from './dto/update.dto';
import { Proyecto } from './proyecto.entity';

@Injectable()
export class ProyectoService {
    constructor(
        @InjectRepository(Proyecto)
        private readonly proyectoRepository: Repository<Proyecto>,
    ) { }

    async findAll() {
        const getAll = await this.proyectoRepository.find({
            relations: ['tipologia', 'comuna']
        })
        return getAll
    }

    async findOne(id: string) {
        const getAll = await this.proyectoRepository.findOne({
            where: {id},
            relations: ['tipologia', 'comuna']
        })
        return getAll
    }

    async findByEmpresa(id: string) {
        const getAll = await this.proyectoRepository.find({
            where: { empresa: id },
            relations: ['tipologia', 'comuna']
        })
        return getAll
    }
    async create(dto: CreateProyectoDto) {
        const elem = new Proyecto()
        elem.nombre = dto.nombre
        elem.desc = dto.desc
        elem.empresa = dto.idEmpresa
        elem.comuna = dto.idComuna
        elem.url_proyecto = dto.url_proyecto
        elem.imagen = dto.imagen
        elem.direccion = dto.direccion
        elem.tipologia = dto.idTipologia
        return this.proyectoRepository.save(elem)
    }

    async update(dto: UpdateProyectoDto) {
        const find = await this.proyectoRepository.findOne({
            id: dto.id,
        })
        if(find) {
          const update = Object.assign(find, dto)
           const saveDto = await this.proyectoRepository.save(update)
           console.log("!-proyecto update saveDto => ",saveDto)
           return saveDto;
        }
        return null
    }
}
