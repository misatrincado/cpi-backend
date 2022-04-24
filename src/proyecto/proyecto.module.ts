import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectoController } from './proyecto.controller';
import { Proyecto } from './proyecto.entity';
import { ProyectoService } from './proyecto.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Proyecto,
    ]),
  ],
  controllers: [ProyectoController],
  providers: [ProyectoService],
  exports: [ProyectoService],
})
export class ProyectoModule {}
