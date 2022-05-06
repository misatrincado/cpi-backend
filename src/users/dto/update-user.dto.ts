import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  readonly id: number;

  readonly email: string;

  readonly password: string;
}
