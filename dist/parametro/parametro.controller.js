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
exports.ParametroController = void 0;
const common_1 = require("@nestjs/common");
const create_dto_1 = require("./dto/create.dto");
const update_dto_1 = require("./dto/update.dto");
const parametro_service_1 = require("./parametro.service");
let ParametroController = class ParametroController {
    constructor(parametroService) {
        this.parametroService = parametroService;
    }
    async findBySubambito(id) {
        const data = await this.parametroService.findBySubambito(id);
        return { data };
    }
    async obtainAllWithIndicators(id) {
        const data = await this.parametroService.obtainAllWithIndicators(id);
        console.log("data", data);
        return { data };
    }
    async create(dto) {
        const data = await this.parametroService.create(dto);
        return { data };
    }
    async update(dto) {
        const data = await this.parametroService.update(dto);
        return { data };
    }
};
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParametroController.prototype, "findBySubambito", null);
__decorate([
    (0, common_1.Get)('/indicadores/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParametroController.prototype, "obtainAllWithIndicators", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateParametroDto]),
    __metadata("design:returntype", Promise)
], ParametroController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_dto_1.UpdatesParametroDto]),
    __metadata("design:returntype", Promise)
], ParametroController.prototype, "update", null);
ParametroController = __decorate([
    (0, common_1.Controller)('parametro'),
    __metadata("design:paramtypes", [parametro_service_1.ParametroService])
], ParametroController);
exports.ParametroController = ParametroController;
//# sourceMappingURL=parametro.controller.js.map