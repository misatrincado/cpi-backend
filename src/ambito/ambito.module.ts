import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmbitoController } from './ambito.controller';
import { Ambito } from './ambito.entity';
import { AmbitoService } from './ambito.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Ambito,
    ]),
  ],
  controllers: [AmbitoController],
  providers: [AmbitoService],
  exports: [AmbitoService]
})
export class AmbitoModule {}
