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
exports.Resultados = void 0;
const calificacion_entity_1 = require("../calificacion/calificacion.entity");
const empresa_entity_1 = require("../empresa/empresa.entity");
const indicador_entity_1 = require("../indicador/indicador.entity");
const typeorm_1 = require("typeorm");
let Resultados = class Resultados {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Resultados.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => indicador_entity_1.Indicador, (e) => e),
    (0, typeorm_1.JoinColumn)({ name: 'idIndicador' }),
    __metadata("design:type", Number)
], Resultados.prototype, "indicador", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => calificacion_entity_1.Calificacion, (e) => e),
    (0, typeorm_1.JoinColumn)({ name: 'idCalificacion' }),
    __metadata("design:type", Number)
], Resultados.prototype, "calificacion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Resultados.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Resultados.prototype, "puntos", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], Resultados.prototype, "created", void 0);
Resultados = __decorate([
    (0, typeorm_1.Entity)()
], Resultados);
exports.Resultados = Resultados;
//# sourceMappingURL=resultados.entity.js.map