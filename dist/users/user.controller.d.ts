import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRO } from './user.interface';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    login(loginUserDto: LoginUserDto): Promise<UserRO>;
    create(userData: CreateUserDto): Promise<{
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
