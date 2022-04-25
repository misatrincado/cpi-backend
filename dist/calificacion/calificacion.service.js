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
exports.CalificacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const calificacion_entity_1 = require("./calificacion.entity");
let CalificacionService = class CalificacionService {
    constructor(calificacionRepository) {
        this.calificacionRepository = calificacionRepository;
    }
    async findAll() {
        const getAll = await this.calificacionRepository.find();
        return getAll;
    }
    async create(dto) {
        const elem = new calificacion_entity_1.Calificacion();
        elem.proyecto = dto.idProyecto;
        elem.fechaCalificacion = dto.fechaCalificacion;
        elem.vigente = dto.vigente;
        elem.urlCalificacion = dto.urlCalificacion;
        const res = await this.calificacionRepository.save(elem);
        console.log("res create Indicador", res);
        return res;
    }
};
CalificacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(calificacion_entity_1.Calificacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CalificacionService);
exports.CalificacionService = CalificacionService;
//# sourceMappingURL=calificacion.service.js.map