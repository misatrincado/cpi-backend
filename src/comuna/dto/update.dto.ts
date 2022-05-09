import { IsNotEmpty } from 'class-validator';

export class UpdateComunaDto {
  @IsNotEmpty()
  id: number;

  nombre?: string;
}