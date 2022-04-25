import { Controller, Get } from '@nestjs/common';
import { AmbitoService } from './ambito.service';

@Controller('ambito')
export class AmbitoController {
    constructor(private readonly ambitoService: AmbitoService) { }

    @Get()
    async findAll() {
        const data = await this.ambitoService.findAll();
        return { data }
    }
}
