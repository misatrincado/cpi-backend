import { IsNotEmpty } from 'class-validator';

export class CreateCalificacionDto {
  @IsNotEmpty()
  idProyecto: number;

  @IsNotEmpty()
  fechaCalificacion: string;

  @IsNotEmpty()
  vigente: boolean;

  @IsNotEmpty()
  urlCalificacion: string;

}