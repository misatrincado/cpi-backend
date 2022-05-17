import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, Db } from 'typeorm';
import { AppController } from './app.controller';
import { UserModule } from './users/users.module';
import { EmpresaController } from './empresa/empresa.controller';
import { EmpresaModule } from './empresa/empresa.module';
import { ProyectoModule } from './proyecto/proyecto.module';
import { CalificacionModule } from './calificacion/calificacion.module';
import { ResultadosModule } from './resultados/resultados.module';
import { IndicadorModule } from './indicador/indicador.module';
import { AmbitoModule } from './ambito/ambito.module';
import { SubambitoModule } from './subambito/subambito.module';
import { ParametroModule } from './parametro/parametro.module';
import { TipologiaModule } from './tipologia/tipologia.module';
import { ComunaModule } from './comuna/comuna.module';
import config from './config';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'mssql',
        host: config.DB.host,
        port: config.DB.port,
        username: config.DB.username,
        password: config.DB.password,
        database: config.DB.database,
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    MulterModule.register({
      dest: '../files',
    }),
    UserModule,
    EmpresaModule,
    ProyectoModule,
    CalificacionModule,
    ResultadosModule,
    IndicadorModule,
    AmbitoModule,
    SubambitoModule,
    ParametroModule,
    TipologiaModule,
    ComunaModule,
  ],
  controllers: [AppController, EmpresaController],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
