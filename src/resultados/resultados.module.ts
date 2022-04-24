import { Module } from '@nestjs/common';
import { ResultadosController } from './resultados.controller';

@Module({
  controllers: [ResultadosController]
})
export class ResultadosModule {}
