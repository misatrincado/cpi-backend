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
exports.ParametroService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const indicador_entity_1 = require("../indicador/indicador.entity");
const typeorm_2 = require("typeorm");
const parametro_entity_1 = require("./parametro.entity");
let ParametroService = class ParametroService {
    constructor(parametroRepository, indicatorRepository) {
        this.parametroRepository = parametroRepository;
        this.indicatorRepository = indicatorRepository;
    }
    async findBySubambito(id) {
        const getAll = await this.parametroRepository.find({
            where: { subambito: id }
        });
        return getAll;
    }
    async obtainAllWithIndicators(id) {
        let getParametro;
        if (id === '0') {
            getParametro = await this.parametroRepository.find();
        }
        else {
            getParametro = await this.parametroRepository.find({
                where: { subambito: id }
            });
        }
        const send = await Promise.all(getParametro.map(async (i) => {
            const getIndicadores = await this.indicatorRepository.find({
                where: { parametro: i.id }
            });
            return Object.assign(Object.assign({}, i), { indicadores: getIndicadores });
        }));
        console.log("send", send);
        return send;
    }
    async create(dto) {
        const elem = new parametro_entity_1.Parametro();
        elem.subambito = dto.idSubambito;
        elem.nombre = dto.nombre;
        elem.desc = dto.desc;
        elem.activo = dto.activo;
        const res = await this.parametroRepository.save(elem);
        console.log("res create Parametro", res);
        return res;
    }
    async update(dto) {
        const find = await this.parametroRepository.findOne({
            id: dto.id
        });
        if (find) {
            const update = Object.assign(find, dto);
            const saveDto = await this.parametroRepository.save(update);
            return saveDto;
        }
        return null;
    }
};
ParametroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(parametro_entity_1.Parametro)),
    __param(1, (0, typeorm_1.InjectRepository)(indicador_entity_1.Indicador)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ParametroService);
exports.ParametroService = ParametroService;
//# sourceMappingURL=parametro.service.js.map