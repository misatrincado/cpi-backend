import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParametroController } from './parametro.controller';
import { Parametro } from './parametro.entity';
import { ParametroService } from './parametro.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Parametro,
    ]),
  ],
  controllers: [ParametroController],
  providers: [ParametroService],
  exports: [ParametroService],

})
export class ParametroModule { }
