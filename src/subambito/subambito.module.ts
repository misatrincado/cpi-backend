import { Module } from '@nestjs/common';
import { SubambitoController } from './subambito.controller';

@Module({
  controllers: [SubambitoController]
})
export class SubambitoModule {}
