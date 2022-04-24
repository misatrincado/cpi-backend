import { IsNotEmpty } from 'class-validator';

export class CreateProyectoDto {
  @IsNotEmpty()
  readonly nombre: string;

  @IsNotEmpty()
  readonly desc: string;

  @IsNotEmpty()
  readonly idEmpresa: number;

  @IsNotEmpty()
  readonly comuna: string;
  
  @IsNotEmpty()
  readonly url_proyecto: string;
  
  @IsNotEmpty()
  readonly imagen: string;
  
  @IsNotEmpty()
  readonly direccion: string;
  
  @IsNotEmpty()
  readonly idTipologia: number; 
}


