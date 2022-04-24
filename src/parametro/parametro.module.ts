import { Module } from '@nestjs/common';
import { ParametroController } from './parametro.controller';

@Module({
  controllers: [ParametroController]
})
export class ParametroModule {}
