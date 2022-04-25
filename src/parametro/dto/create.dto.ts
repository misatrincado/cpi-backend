import { IsNotEmpty } from 'class-validator';

export class CreateParametroDto {
  @IsNotEmpty()
  idSubambito: number;

  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  desc: string;

  @IsNotEmpty()
  activo: boolean;
}