import { IsNotEmpty } from 'class-validator';

export class UpdateIndicadoraDto {
  @IsNotEmpty()
  id: number;

  nombre?: string;

  desc?: string;

  unidad?: string;

  escala?: string;

  tipologia?: string;
  
  activo?: boolean;
}