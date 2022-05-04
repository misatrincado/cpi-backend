import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRO } from './user.interface';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<UserRO> {
    const user = await this.userService.findOne(loginUserDto);

    if (!user) {
      return {
        user: null,
      };
    }
    return { user }
  }

  @Post()
  async create(@Body() userData: CreateUserDto) {
    const response = await this.userService.create(userData);
    return response;
  }
}
