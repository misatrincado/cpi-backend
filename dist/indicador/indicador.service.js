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
exports.IndicadorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const indicador_entity_1 = require("./indicador.entity");
let IndicadorService = class IndicadorService {
    constructor(inidicadorRepository) {
        this.inidicadorRepository = inidicadorRepository;
    }
    async findByParametro(id) {
        const getAll = await this.inidicadorRepository.find({
            where: { parametro: id }
        });
        return getAll;
    }
    async create(dto) {
        const elem = new indicador_entity_1.Indicador();
        elem.parametro = dto.idParametro;
        elem.nombre = dto.nombre;
        elem.desc = dto.desc;
        elem.unidad = dto.unidad;
        elem.escala = dto.escala;
        elem.activo = dto.activo;
        const res = await this.inidicadorRepository.save(elem);
        console.log("res create Indicador", res);
        return res;
    }
    async update(dto) {
        const find = await this.inidicadorRepository.findOne({
            id: dto.id
        });
        if (find) {
            const update = Object.assign(find, dto);
            const saveDto = await this.inidicadorRepository.save(update);
            return saveDto;
        }
        return null;
    }
};
IndicadorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(indicador_entity_1.Indicador)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], IndicadorService);
exports.IndicadorService = IndicadorService;
//# sourceMappingURL=indicador.service.js.map