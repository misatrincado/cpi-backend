import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calificacion } from './calificacion.entity';
import { CreateCalificacionDto } from './dto/create.dto';

@Injectable()
export class CalificacionService {
    constructor(
        @InjectRepository(Calificacion)
        private readonly calificacionRepository: Repository<Calificacion>,
    ) { }

    async findByProyecto(id: string) {
        const getAll = await this.calificacionRepository.find({
            where: { proyecto: id }
        })
        return getAll
    }
    async create(dto: CreateCalificacionDto) {
        const elem = new Calificacion()
        elem.proyecto = dto.idProyecto
        elem.fechaCalificacion = dto.fechaCalificacion
        elem.fechaCalificacion = dto.fechaCalificacion
        elem.vigente = dto.vigente
        elem.urlCalificacion = ''
        const res = await this.calificacionRepository.save(elem)
        console.log("res create calificacion", res)
        return res
    }
}
