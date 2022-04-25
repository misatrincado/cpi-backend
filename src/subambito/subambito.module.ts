import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubambitoController } from './subambito.controller';
import { Subambito } from './subambito.entity';
import { SubambitoService } from './subambito.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Subambito,
    ]),
  ],
  controllers: [SubambitoController],
  providers: [SubambitoService],
  exports: [SubambitoService],
})
export class SubambitoModule {}
