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
            where: { proyecto: id },
            relations: ['proyecto', 'proyecto.tipologia']
        })
        return getAll
    }
    async findById(id: string) {
        const getAll = await this.calificacionRepository.findOne({
            where: { id: id },
            relations: ['proyecto', 'proyecto.tipologia']
        })
        return getAll
    }
    async allDespublicar(idTipologia: number) {
        let elem:any = await this.calificacionRepository.find({
            relations: ['proyecto', 'proyecto.tipologia'],
        })
        elem.filter(i => i.proyecto.tipologia.id === idTipologia)
        elem.map(element => {
            element.vigente = false
            this.calificacionRepository.save(element)
        })
    }
    async publicar(id: string) {
        let elem:any = await this.calificacionRepository.findOne({
            where: { id: id },
            relations: ['proyecto', 'proyecto.tipologia']
        })
        await this.allDespublicar(elem.proyecto.tipologia.id)
        elem.vigente = true
        return this.calificacionRepository.save(elem)
    }
    async create(dto: CreateCalificacionDto) {
        const elem = new Calificacion()
        elem.proyecto = dto.idProyecto
        elem.fechaCalificacion = dto.fechaCalificacion
        elem.fechaCalificacion = dto.fechaCalificacion
        elem.vigente = dto.vigente
        elem.urlCalificacion = ''
        const res = await this.calificacionRepository.save(elem)
        return res
    }
}
