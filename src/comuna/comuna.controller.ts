import { Body, Controller, Get, Post } from '@nestjs/common';
import { ComunaService } from './comuna.service';
import { UpdateComunaDto } from './dto/update.dto';

@Controller('comuna')
export class ComunaController {
    constructor(private readonly comunaService: ComunaService) {}

    @Get()
    async findAll() {
        const data = await this.comunaService.findAll();
        return {data}
    }

    @Post('update')
    async update(@Body() dto: UpdateComunaDto) {
        const data = await this.comunaService.update(dto);
        return {data}
    }
}
