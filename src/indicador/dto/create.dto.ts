import { IsNotEmpty } from 'class-validator';

export class CreateIndicadoraDto {
  @IsNotEmpty()
  idTipologia: number;

  @IsNotEmpty()
  idParametro: number;

  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  desc: string;

  @IsNotEmpty()
  unidad: string;

  @IsNotEmpty()
  escala: string;

  @IsNotEmpty()
  activo: boolean;
}