import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/createEmpresa.dto';
import { UpdateEmpresaDto } from './dto/update.dto';
import { EmpresaService } from './empresa.service';

@Controller('empresa')
export class EmpresaController {
    constructor(private readonly empresaService: EmpresaService) {}

    @Get()
    async findAll() {
        const data = await this.empresaService.findAll();
        return {data}
    }

    @Post()
    async create(@Body() dto: CreateEmpresaDto) {
        const data = await this.empresaService.create(dto);
        return {data}
    }

    @Post('update')
    async update(@Body() dto: UpdateEmpresaDto) {
        const data = await this.empresaService.update(dto);
        return {data}
    }
}
