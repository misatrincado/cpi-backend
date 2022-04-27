import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Indicador } from 'src/indicador/indicador.entity';
import { Parametro } from 'src/parametro/parametro.entity';
import { SubambitoController } from './subambito.controller';
import { Subambito } from './subambito.entity';
import { SubambitoService } from './subambito.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Subambito, Parametro, Indicador
    ]),
  ],
  controllers: [SubambitoController],
  providers: [SubambitoService],
  exports: [SubambitoService],
})
export class SubambitoModule {}
