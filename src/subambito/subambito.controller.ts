import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateEmpresaDto } from 'src/empresa/dto/createEmpresa.dto';
import { CreateSubambitoDto } from './dto/createSubambito.dto';
import { SubambitoService } from './subambito.service';

@Controller('subambito')
export class SubambitoController {
    constructor(private readonly subAmbitoService: SubambitoService) {}

    @Get('/:id')
    async findByAmbito(@Param('id') id: string) {
        const data = await this.subAmbitoService.findByAmbito(id);
        return {data}
    }

    @Post()
    async create(@Body() dto: CreateSubambitoDto) {
        const data = await this.subAmbitoService.create(dto);
        return {data}
    }
}
