import { Module } from '@nestjs/common';
import { AmbitoController } from './ambito.controller';

@Module({
  controllers: [AmbitoController]
})
export class AmbitoModule {}
