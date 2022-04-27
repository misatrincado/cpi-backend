import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProyectoDto } from './dto/create.dto';
import { Proyecto } from './proyecto.entity';

@Injectable()
export class ProyectoService {
    constructor(
        @InjectRepository(Proyecto)
        private readonly empresaRepository: Repository<Proyecto>,
    ) { }

    async findAll() {
        const getAll = await this.empresaRepository.find()
        return getAll
    }
    async create(dto: CreateProyectoDto) {
        const elem = new Proyecto()
        elem.nombre = dto.nombre
        elem.desc = dto.desc
        elem.empresa = dto.idEmpresa
        elem.comuna = dto.comuna
        elem.url_proyecto = dto.url_proyecto
        elem.imagen = dto.imagen
        elem.direccion = dto.direccion
        elem.tipologia = dto.idTipologia
        return this.empresaRepository.save(elem)
    }
}
