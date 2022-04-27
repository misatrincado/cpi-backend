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
const indicador_entity_1 = require("../indicador/indicador.entity");
const parametro_entity_1 = require("../parametro/parametro.entity");
const typeorm_2 = require("typeorm");
const subambito_entity_1 = require("./subambito.entity");
let SubambitoService = class SubambitoService {
    constructor(subambitoRepository, parametroRepository, indicadorRepository) {
        this.subambitoRepository = subambitoRepository;
        this.parametroRepository = parametroRepository;
        this.indicadorRepository = indicadorRepository;
    }
    async findByAmbito(id) {
        const getAll = await this.subambitoRepository.find({
            where: { ambito: id }
        });
        return getAll;
    }
    async obtainWithParamsIndica(idAmbito) {
        const getSubambito = await this.subambitoRepository.find({
            where: {
                ambito: idAmbito
            }
        });
        const send = await Promise.all(getSubambito.map(async (itemSub) => {
            const getParametros = await this.parametroRepository.find({
                where: { subambito: itemSub.id }
            });
            const parametros = await Promise.all(getParametros.map(async (itemParam) => {
                const getIndicadores = await this.indicadorRepository.find({
                    where: { parametro: itemParam.id }
                });
                console.log("getIndicadores", getIndicadores);
                return Object.assign(Object.assign({}, itemParam), { indicadores: getIndicadores });
            }));
            return Object.assign(Object.assign({}, itemSub), { parametros });
        }));
        return send;
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
    async update(dto) {
        const find = await this.subambitoRepository.findOne({
            id: dto.id
        });
        if (find) {
            const update = Object.assign(find, dto);
            const saveDto = await this.subambitoRepository.save(update);
            return saveDto;
        }
        return null;
    }
};
SubambitoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(subambito_entity_1.Subambito)),
    __param(1, (0, typeorm_1.InjectRepository)(parametro_entity_1.Parametro)),
    __param(2, (0, typeorm_1.InjectRepository)(indicador_entity_1.Indicador)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SubambitoService);
exports.SubambitoService = SubambitoService;
//# sourceMappingURL=subambito.service.js.map