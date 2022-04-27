"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubambitoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const indicador_entity_1 = require("../indicador/indicador.entity");
const parametro_entity_1 = require("../parametro/parametro.entity");
const subambito_controller_1 = require("./subambito.controller");
const subambito_entity_1 = require("./subambito.entity");
const subambito_service_1 = require("./subambito.service");
let SubambitoModule = class SubambitoModule {
};
SubambitoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                subambito_entity_1.Subambito, parametro_entity_1.Parametro, indicador_entity_1.Indicador
            ]),
        ],
        controllers: [subambito_controller_1.SubambitoController],
        providers: [subambito_service_1.SubambitoService],
        exports: [subambito_service_1.SubambitoService],
    })
], SubambitoModule);
exports.SubambitoModule = SubambitoModule;
//# sourceMappingURL=subambito.module.js.map