import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmpresaDto } from './dto/createEmpresa.dto';
import { Empresa } from './empresa.entity';

@Injectable()
export class EmpresaService {
    constructor(
        @InjectRepository(Empresa)
        private readonly empresaRepository: Repository<Empresa>,
    ) { }

    async findAll() {
        const getAll = await this.empresaRepository.find()
        return getAll
    }
    async create(dto: CreateEmpresaDto) {
        const empresa = new Empresa()
        empresa.nombre = dto.name
        empresa.rut = dto.rut
        const res = await this.empresaRepository.save(empresa)
        console.log("res",res)
        return res
    }
}
