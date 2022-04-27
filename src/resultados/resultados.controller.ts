import { Body, Controller, Post } from '@nestjs/common';
import { CreateResultadosDto } from './dto/create.dto';
import { ResultadosService } from './resultados.service';

@Controller('resultados')
export class ResultadosController {
    constructor(private readonly resultadosService: ResultadosService) {}

    @Post()
    async create(@Body() dto: CreateResultadosDto) {
        const data = await this.resultadosService.create(dto);
        return {data}
    }
   
    @Post('/many')
    async createMany(@Body() dto: CreateResultadosDto[]) {
        const data = await this.resultadosService.createMany(dto);
        return {data}
    }
}
