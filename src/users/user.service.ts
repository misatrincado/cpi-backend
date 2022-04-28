import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { Users } from './users.entity';
import * as argon2 from 'argon2';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { validate } from 'class-validator';

@Injectable()
export class UserService {
  constructor( 
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async findOne({ email, password }: LoginUserDto): Promise<Users> {
    const user = await this.userRepository.findOne({ email });
    if (!user) {
      return null;
    }

    if (await argon2.verify(user.password, password)) {
      return user;
    }

    return null;
  }
 
  async create(dto: CreateUserDto) {
    const { email, password } = dto;
    const user = await this.userRepository.findOne({email})

    if (user) {
      return { error: 'El correo ya existe' };
    }
    const newUser = new Users();
    newUser.email = email;
    newUser.password = password;
    const saveUser = this.userRepository.save(newUser)
    return {
      data: saveUser
    }
  }
}
