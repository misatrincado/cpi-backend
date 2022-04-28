import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProyectoDto } from './dto/create.dto';
import { ProyectoService } from './proyecto.service';

@Controller('proyecto')
export class ProyectoController {
    constructor(private readonly proyectoService: ProyectoService) {}

    @Get()
    async findAll() {
        const data = await this.proyectoService.findAll();
        return {data}
    }

    @Get('/:id')
    async findOne(@Param('id') id: string) {
        const data = await this.proyectoService.findOne(id);
        return {data}
    }

    @Get('/empresa/:id')
    async findByEmpresa(@Param('id') id: string) {
        const data = await this.proyectoService.findByEmpresa(id);
        return {data}
    }

    @Post()
    async create(@Body() dto: CreateProyectoDto) {
        const data = await this.proyectoService.create(dto);
        return {data}
    }
}
