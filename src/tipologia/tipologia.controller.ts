import { Controller, Get } from '@nestjs/common';
import { TipologiaService } from './tipologia.service';

@Controller('tipologia')
export class TipologiaController {
    constructor(private readonly tipologiaService: TipologiaService) { }

    @Get()
    async findAll() {
        const data = await this.tipologiaService.findAll();
        return { data }
    }
}
