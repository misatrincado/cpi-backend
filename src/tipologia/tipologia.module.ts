import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipologiaController } from './tipologia.controller';
import { Tipologia } from './tipologia.entity';
import { TipologiaService } from './tipologia.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Tipologia,
    ]),
  ],
  controllers: [TipologiaController],
  providers: [TipologiaService],
  exports: [TipologiaService],
})
export class TipologiaModule {}
