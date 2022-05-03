import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateIndicadoraDto } from './dto/create.dto';
import { UpdateIndicadoraDto } from './dto/update.dto';
import { IndicadorService } from './indicador.service';

@Controller('indicador')
export class IndicadorController {
    constructor(private readonly indicadorService: IndicadorService) {}

    @Get('/:idParam/:idTipo')
    async findByParametroTipo(
        @Param('idParam') idParam: string, 
        @Param('idTipo') idTipo: string
    ) {
        const data = await this.indicadorService.findByParametroTipo(idParam, idTipo) ;
        return {data}
    }

    @Post()
    async create(@Body() dto: CreateIndicadoraDto) {
        const data = await this.indicadorService.create(dto);
        return {data}
    }
  
    @Post('update')
    async update(@Body() dto: UpdateIndicadoraDto) {
        const data = await this.indicadorService.update(dto);
        return {data}
    }
}
