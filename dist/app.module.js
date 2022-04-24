"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const app_controller_1 = require("./app.controller");
const users_module_1 = require("./users/users.module");
const empresa_controller_1 = require("./empresa/empresa.controller");
const empresa_module_1 = require("./empresa/empresa.module");
const proyecto_module_1 = require("./proyecto/proyecto.module");
const calificacion_module_1 = require("./calificacion/calificacion.module");
const resultados_module_1 = require("./resultados/resultados.module");
const indicador_module_1 = require("./indicador/indicador.module");
const ambito_module_1 = require("./ambito/ambito.module");
const subambito_module_1 = require("./subambito/subambito.module");
const parametro_module_1 = require("./parametro/parametro.module");
const tipologia_module_1 = require("./tipologia/tipologia.module");
const config_1 = require("./config");
let AppModule = class AppModule {
    constructor(connection) {
        this.connection = connection;
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: async () => ({
                    type: 'mssql',
                    host: config_1.default.DB.host,
                    port: config_1.default.DB.port,
                    username: config_1.default.DB.username,
                    password: config_1.default.DB.password,
                    database: config_1.default.DB.database,
                    entities: ['dist/**/*.entity{.ts,.js}'],
                    synchronize: true,
                }),
            }),
            users_module_1.UserModule,
            empresa_module_1.EmpresaModule,
            proyecto_module_1.ProyectoModule,
            calificacion_module_1.CalificacionModule,
            resultados_module_1.ResultadosModule,
            indicador_module_1.IndicadorModule,
            ambito_module_1.AmbitoModule,
            subambito_module_1.SubambitoModule,
            parametro_module_1.ParametroModule,
            tipologia_module_1.TipologiaModule,
        ],
        controllers: [app_controller_1.AppController, empresa_controller_1.EmpresaController],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map