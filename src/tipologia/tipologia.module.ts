import { Module } from '@nestjs/common';
import { TipologiaController } from './tipologia.controller';
import { TipologiaService } from './tipologia.service';

@Module({
  controllers: [TipologiaController],
  providers: [TipologiaService]
})
export class TipologiaModule {}
