import { Module } from '@nestjs/common';
import { CalificacionController } from './calificacion.controller';

@Module({
  controllers: [CalificacionController]
})
export class CalificacionModule {}
