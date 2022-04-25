import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndicadorController } from './indicador.controller';
import { Indicador } from './indicador.entity';
import { IndicadorService } from './indicador.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Indicador,
    ]),
  ],
  controllers: [IndicadorController],
  providers: [IndicadorService],
  exports : [IndicadorService],
})
export class IndicadorModule {}
