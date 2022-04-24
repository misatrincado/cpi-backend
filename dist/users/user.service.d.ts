import { LoginUserDto } from './dto/login-user.dto';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<Users>);
    findOne({ email, password }: LoginUserDto): Promise<Users>;
    create(dto: CreateUserDto): Promise<{
        error: string;
        data?: undefined;
    } | {
        data: {
            created: string;
            email: string;
            password: string;
        };
        error?: undefined;
    }>;
}
