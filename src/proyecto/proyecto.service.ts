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
        const empresa = new Proyecto()
        empresa.nombre = dto.nombre
        empresa.desc = dto.desc
        empresa.empresa = dto.idEmpresa
        empresa.comuna = dto.comuna
        empresa.url_proyecto = dto.url_proyecto
        empresa.imagen = dto.imagen
        empresa.direccion = dto.direccion
        empresa.tipologia = dto.idTipologia
        return this.empresaRepository.save(empresa)
    }
}
