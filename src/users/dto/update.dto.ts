import { IsNotEmpty } from 'class-validator';

export class UpdateUsersDto {
  @IsNotEmpty()
  id: number;

  email: string;

  password: string;

  usertype_id: number;
}