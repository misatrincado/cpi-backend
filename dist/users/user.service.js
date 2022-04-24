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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const users_entity_1 = require("./users.entity");
const argon2 = require("argon2");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const class_validator_1 = require("class-validator");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findOne({ email, password }) {
        const user = await this.userRepository.findOne({ email });
        if (!user) {
            return null;
        }
        if (await argon2.verify(user.password, password)) {
            return user;
        }
        return null;
    }
    async create(dto) {
        const { email, password } = dto;
        const qb = await (0, typeorm_2.getRepository)(users_entity_1.Users)
            .createQueryBuilder('user')
            .where('user.email = :email', { email });
        const user = await qb.getOne();
        if (user) {
            return { error: 'El correo ya existe' };
        }
        const newUser = new users_entity_1.Users();
        newUser.email = email;
        newUser.password = password;
        newUser.created = new Date().toString();
        const errors = await (0, class_validator_1.validate)(newUser);
        if (errors.length > 0) {
            throw new common_1.HttpException({ message: 'Input data validation failed' }, common_1.HttpStatus.BAD_REQUEST);
        }
        else {
            return {
                data: Object.assign(Object.assign({}, dto), { created: newUser.created }),
            };
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map