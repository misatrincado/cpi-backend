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
exports.TipologiaController = void 0;
const common_1 = require("@nestjs/common");
const tipologia_service_1 = require("./tipologia.service");
let TipologiaController = class TipologiaController {
    constructor(tipologiaService) {
        this.tipologiaService = tipologiaService;
    }
    async findAll() {
        const data = await this.tipologiaService.findAll();
        return { data };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TipologiaController.prototype, "findAll", null);
TipologiaController = __decorate([
    (0, common_1.Controller)('tipologia'),
    __metadata("design:paramtypes", [tipologia_service_1.TipologiaService])
], TipologiaController);
exports.TipologiaController = TipologiaController;
//# sourceMappingURL=tipologia.controller.js.map