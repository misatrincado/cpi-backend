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
exports.CalificacionController = void 0;
const common_1 = require("@nestjs/common");
const calificacion_service_1 = require("./calificacion.service");
const create_dto_1 = require("./dto/create.dto");
let CalificacionController = class CalificacionController {
    constructor(calificacionService) {
        this.calificacionService = calificacionService;
    }
    async findAll() {
        return this.calificacionService.findAll();
    }
    async create(dto) {
        const data = await this.calificacionService.create(dto);
        return { data };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CalificacionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateCalificacionDto]),
    __metadata("design:returntype", Promise)
], CalificacionController.prototype, "create", null);
CalificacionController = __decorate([
    (0, common_1.Controller)('calificacion'),
    __metadata("design:paramtypes", [calificacion_service_1.CalificacionService])
], CalificacionController);
exports.CalificacionController = CalificacionController;
//# sourceMappingURL=calificacion.controller.js.map