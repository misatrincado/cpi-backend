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
exports.SubambitoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const subambito_entity_1 = require("./subambito.entity");
let SubambitoService = class SubambitoService {
    constructor(subambitoRepository) {
        this.subambitoRepository = subambitoRepository;
    }
    async findByAmbito(id) {
        const getAll = await this.subambitoRepository.find({
            where: { ambito: id }
        });
        return getAll;
    }
    async create(dto) {
        const elem = new subambito_entity_1.Subambito();
        elem.ambito = dto.ambito;
        elem.nombre = dto.nombre;
        elem.desc = dto.desc;
        elem.activo = dto.activo;
        const res = await this.subambitoRepository.save(elem);
        console.log("res create Subambito", res);
        return res;
    }
};
SubambitoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(subambito_entity_1.Subambito)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SubambitoService);
exports.SubambitoService = SubambitoService;
//# sourceMappingURL=subambito.service.js.map