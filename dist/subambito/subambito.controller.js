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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubambitoController = void 0;
const common_1 = require("@nestjs/common");
const createEmpresa_dto_1 = require("../empresa/dto/createEmpresa.dto");
const createSubambito_dto_1 = require("./dto/createSubambito.dto");
const update_dto_1 = require("./dto/update.dto");
const subambito_service_1 = require("./subambito.service");
let SubambitoController = class SubambitoController {
    constructor(subAmbitoService) {
        this.subAmbitoService = subAmbitoService;
    }
    async findByAmbito(id) {
        const data = await this.subAmbitoService.findByAmbito(id);
        return { data };
    }
    async obtainWithParamsIndica(idAmbito) {
        const data = await this.subAmbitoService.obtainWithParamsIndica(idAmbito);
        return { data };
    }
    async create(dto) {
        const data = await this.subAmbitoService.create(dto);
        return { data };
    }
    async update(dto) {
        const data = await this.subAmbitoService.update(dto);
        return { data };
    }
};
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubambitoController.prototype, "findByAmbito", null);
__decorate([
    (0, common_1.Get)('/parametros/indicadores/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubambitoController.prototype, "obtainWithParamsIndica", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createSubambito_dto_1.CreateSubambitoDto]),
    __metadata("design:returntype", Promise)
], SubambitoController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_dto_1.UpdateSubambitoDto]),
    __metadata("design:returntype", Promise)
], SubambitoController.prototype, "update", null);
SubambitoController = __decorate([
    (0, common_1.Controller)('subambito'),
    __metadata("design:paramtypes", [subambito_service_1.SubambitoService])
], SubambitoController);
exports.SubambitoController = SubambitoController;
//# sourceMappingURL=subambito.controller.js.map