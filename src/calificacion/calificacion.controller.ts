import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CalificacionService } from './calificacion.service';
import { CreateCalificacionDto } from './dto/create.dto';

@Controller('calificacion')
export class CalificacionController {
    constructor(private readonly calificacionService: CalificacionService) {}

    @Get('/:id')
    async findByProyecto(@Param('id') id: string) {
        const data = await this.calificacionService.findByProyecto(id);
        return {data}
    }

    @Post()
    async create(@Body() dto: CreateCalificacionDto) {
        const data = await this.calificacionService.create(dto);
        return {data}
    }
}
