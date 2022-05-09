import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRO } from './user.interface';
import { UserService } from './user.service';
import { UpdateUsersDto } from './dto/update.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Express } from 'express';
import { imageFileFilter } from 'src/utils/imageFileFilter';
import { editFileName } from 'src/utils/editFileName';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  async findAll() {
      const data = await this.userService.findAll();
      return {data}
  }

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

  @Post('update')
  async update(@Body() dto: UpdateUsersDto) {
      const data = await this.userService.update(dto);
      return {data}
  }

  @Post('image')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadedFile(@UploadedFile() file) {
    console.log("file", file)
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return {data: response};
  }


  @Get('imagen/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './files' });
  }

}
