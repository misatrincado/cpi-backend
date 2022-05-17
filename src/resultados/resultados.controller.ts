import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { CreateResultadosDto } from './dto/create.dto';
import { ResultadosService } from './resultados.service';

@Controller('resultados')
export class ResultadosController {
    constructor(
        private readonly resultadosService: ResultadosService,
        ) {}

    @Get('/:id')
    async findByCalificacion(@Param('id') id) {
        const data = await this.resultadosService.findByCalificacion(id);
        return {data}
    }

    @Get('/averages/:id')
    async obtainAverages(@Param('id') idCalificacion) {
        const data = await this.resultadosService.obtainAverages(idCalificacion);
        return {data}
    }

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

    @Get('/averages/pdf/:id')
    async obtainAveragesPDF(@Param('id') idCalificacion, @Res() response) {
        response.set({
            'Content-Type': 'image/pdf',
          });
        return await this.resultadosService.obtainAveragesPDF(idCalificacion, response);
    }
}
