import { Controller, Get } from '@nestjs/common';
import { ComunaService } from './comuna.service';

@Controller('comuna')
export class ComunaController {
    constructor(private readonly comunaService: ComunaService) {}

    @Get()
    async findAll() {
        const data = await this.comunaService.findAll();
        return {data}
    }
}
