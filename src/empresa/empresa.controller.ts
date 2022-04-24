import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/createEmpresa.dto';
import { EmpresaService } from './empresa.service';

@Controller('empresa')
export class EmpresaController {
    constructor(private readonly empresaService: EmpresaService) {}

    @Get()
    async findAll() {
        return this.empresaService.findAll();
    }

    @Post()
    async create(@Body() dto: CreateEmpresaDto) {
        const data = await this.empresaService.create(dto);
        return {data}
    }
}
