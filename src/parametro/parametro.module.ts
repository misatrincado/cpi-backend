import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Indicador } from 'src/indicador/indicador.entity';
import { ParametroController } from './parametro.controller';
import { Parametro } from './parametro.entity';
import { ParametroService } from './parametro.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Parametro, Indicador
    ]),
  ],
  controllers: [ParametroController],
  providers: [ParametroService],
  exports: [ParametroService],

})
export class ParametroModule { }
