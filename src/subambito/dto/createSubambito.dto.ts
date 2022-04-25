import { IsNotEmpty } from 'class-validator';

export class CreateSubambitoDto {
  @IsNotEmpty()
  ambito: number;

  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  desc: string;

  @IsNotEmpty()
  activo: boolean;
}
