"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndicadorModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const indicador_controller_1 = require("./indicador.controller");
const indicador_entity_1 = require("./indicador.entity");
const indicador_service_1 = require("./indicador.service");
let IndicadorModule = class IndicadorModule {
};
IndicadorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                indicador_entity_1.Indicador,
            ]),
        ],
        controllers: [indicador_controller_1.IndicadorController],
        providers: [indicador_service_1.IndicadorService],
        exports: [indicador_service_1.IndicadorService],
    })
], IndicadorModule);
exports.IndicadorModule = IndicadorModule;
//# sourceMappingURL=indicador.module.js.map