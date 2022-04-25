"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmbitoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ambito_controller_1 = require("./ambito.controller");
const ambito_entity_1 = require("./ambito.entity");
const ambito_service_1 = require("./ambito.service");
let AmbitoModule = class AmbitoModule {
};
AmbitoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                ambito_entity_1.Ambito,
            ]),
        ],
        controllers: [ambito_controller_1.AmbitoController],
        providers: [ambito_service_1.AmbitoService],
        exports: [ambito_service_1.AmbitoService]
    })
], AmbitoModule);
exports.AmbitoModule = AmbitoModule;
//# sourceMappingURL=ambito.module.js.map