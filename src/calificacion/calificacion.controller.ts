import { Body, Controller, Get, Post } from '@nestjs/common';
import { CalificacionService } from './calificacion.service';
import { CreateCalificacionDto } from './dto/create.dto';

@Controller('calificacion')
export class CalificacionController {
    constructor(private readonly calificacionService: CalificacionService) {}

    @Get()
    async findAll() {
        return this.calificacionService.findAll();
    }

    @Post()
    async create(@Body() dto: CreateCalificacionDto) {
        const data = await this.calificacionService.create(dto);
        return {data}
    }
}
