import { IsNotEmpty } from 'class-validator';

export class CreateResultadosDto {
  @IsNotEmpty()
  idIndicador: number

  @IsNotEmpty()
  idCalificacion: number

  @IsNotEmpty()
  valor: string

  @IsNotEmpty()
  puntos: string
}
