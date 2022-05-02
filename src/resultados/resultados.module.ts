import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ambito } from 'src/ambito/ambito.entity';
import { Calificacion } from 'src/calificacion/calificacion.entity';
import { Indicador } from 'src/indicador/indicador.entity';
import { Parametro } from 'src/parametro/parametro.entity';
import { Subambito } from 'src/subambito/subambito.entity';
import { ResultadosController } from './resultados.controller';
import { Resultados } from './resultados.entity';
import { ResultadosService } from './resultados.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Resultados,
      Subambito,
      Ambito,
      Parametro,
      Calificacion,
      Indicador
    ]),
  ],
  controllers: [ResultadosController],
  providers: [ResultadosService],
  exports: [ResultadosService]
})
export class ResultadosModule {}
