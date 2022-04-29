import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComunaController } from './comuna.controller';
import { Comuna } from './comuna.entity';
import { ComunaService } from './comuna.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Comuna,
    ]),
  ],
  controllers: [ComunaController],
  providers: [ComunaService]
})
export class ComunaModule { }
