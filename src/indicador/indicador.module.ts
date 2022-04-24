import { Module } from '@nestjs/common';
import { IndicadorController } from './indicador.controller';

@Module({
  controllers: [IndicadorController]
})
export class IndicadorModule {}
