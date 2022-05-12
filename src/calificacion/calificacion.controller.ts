import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CalificacionService } from './calificacion.service';
import { CreateCalificacionDto } from './dto/create.dto';

@Controller('calificacion')
export class CalificacionController {
    constructor(private readonly calificacionService: CalificacionService) {}

    @Get('/:id')
    async findByProyecto(@Param('id') idProyecto: string) {
        const data = await this.calificacionService.findByProyecto(idProyecto);
        return {data}
    }
    @Get('/id/:id')
    async findById(@Param('id') id: string) {
        const data = await this.calificacionService.findById(id);
        return {data}
    }
    @Get('/publicar/:id')
    async publicar(@Param('id') id: string) {
        const data = await this.calificacionService.publicar(id);
        return {data}
    }

    @Post()
    async create(@Body() dto: CreateCalificacionDto) {
        const data = await this.calificacionService.create(dto);
        return {data}
    }

    @Get('/eliminar/:id')
    async eliminar(@Param('id') id: string) {
        const data = await this.calificacionService.eliminar(id);
        return {data}
    }
}
