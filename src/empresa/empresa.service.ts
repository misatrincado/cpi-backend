import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmpresaDto } from './dto/createEmpresa.dto';
import { UpdateEmpresaDto } from './dto/update.dto';
import { Empresa } from './empresa.entity';

@Injectable()
export class EmpresaService {
    constructor(
        @InjectRepository(Empresa)
        private readonly empresaRepository: Repository<Empresa>,
    ) { }

    async findAll() {
        const getAll = await this.empresaRepository.find({
            order: { nombre: 'ASC' }
        })
        return getAll
    }
    async create(dto: CreateEmpresaDto) {
        const empresa = new Empresa()
        empresa.nombre = dto.name
        empresa.rut = dto.rut
        const res = await this.empresaRepository.save(empresa)
        return res
    }

    async update(dto: UpdateEmpresaDto) {
        const find = await this.empresaRepository.findOne({
            id: dto.id,
        })
        if(find) {
          const update = Object.assign(find, dto)
           const saveDto = await this.empresaRepository.save(update)
           return saveDto;
        }
        return null
    }
}
