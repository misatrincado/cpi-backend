import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalificacionController } from './calificacion.controller';
import { Calificacion } from './calificacion.entity';
import { CalificacionService } from './calificacion.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Calificacion,
    ]),
  ],
  controllers: [CalificacionController],
  providers: [CalificacionService],
  exports: [CalificacionService],
})
export class CalificacionModule {}
