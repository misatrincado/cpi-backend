import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateIndicadoraDto } from './dto/create.dto';
import { IndicadorService } from './indicador.service';

@Controller('indicador')
export class IndicadorController {
    constructor(private readonly indicadorService: IndicadorService) {}

    @Get('/:id')
    async findByParametro(@Param('id') id: string) {
        const data = await this.indicadorService.findByParametro(id);
        return {data}
    }


    @Post()
    async create(@Body() dto: CreateIndicadoraDto) {
        const data = await this.indicadorService.create(dto);
        return {data}
    }
}
