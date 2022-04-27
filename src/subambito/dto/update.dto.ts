import { IsNotEmpty } from 'class-validator';

export class UpdateSubambitoDto {
  @IsNotEmpty()
  id: number;

  nombre: string;

  desc: string;

  activo: boolean;
}