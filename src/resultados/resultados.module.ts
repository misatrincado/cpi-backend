import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultadosController } from './resultados.controller';
import { Resultados } from './resultados.entity';
import { ResultadosService } from './resultados.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Resultados,
    ]),
  ],
  controllers: [ResultadosController],
  providers: [ResultadosService],
  exports: [ResultadosService]
})
export class ResultadosModule {}
