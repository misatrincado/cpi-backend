import { IsNotEmpty } from 'class-validator';

export class CreateResultadosDto {
  id: number

  @IsNotEmpty()
  idIndicador: number

  @IsNotEmpty()
  idCalificacion: number

  @IsNotEmpty()
  valor: string

  @IsNotEmpty()
  puntos: string
}
