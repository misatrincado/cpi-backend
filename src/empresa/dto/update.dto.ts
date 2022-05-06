import { IsNotEmpty } from 'class-validator';

export class UpdateEmpresaDto {
  @IsNotEmpty()
  id: number;

  nombre?: string;

  rut?: string;
}