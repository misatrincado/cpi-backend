import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateParametroDto } from './dto/create.dto';
import { UpdatesParametroDto } from './dto/update.dto';
import { ParametroService } from './parametro.service';

@Controller('parametro')
export class ParametroController {
    constructor(private readonly parametroService: ParametroService) {}

    @Get('/:id')
    async findBySubambito(@Param('id') id: string) {
        const data = await this.parametroService.findBySubambito(id);
        return {data}
    }

    @Get('/indicadores/:id')
    async obtainAllWithIndicators(@Param('id') id: string) {
        const data = await this.parametroService.obtainAllWithIndicators(id);
        return {data}
    }

    @Post()
    async create(@Body() dto: CreateParametroDto) {
        const data = await this.parametroService.create(dto);
        return {data}
    }

    @Post('update')
    async update(@Body() dto: UpdatesParametroDto) {
        const data = await this.parametroService.update(dto);
        return {data}
    }
}
