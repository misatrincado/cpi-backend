import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProyectoDto } from './dto/create.dto';
import { ProyectoService } from './proyecto.service';

@Controller('proyecto')
export class ProyectoController {
    constructor(private readonly proyectoService: ProyectoService) {}

    @Get()
    async findAll() {
        return this.proyectoService.findAll();
    }

    @Post()
    async create(@Body() dto: CreateProyectoDto) {
        const data = await this.proyectoService.create(dto);
        return {data}
    }
}
