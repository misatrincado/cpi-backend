import { IsNotEmpty } from 'class-validator';

export class UpdateProyectoDto {
  @IsNotEmpty()
  id: number;

  nombre: string;

  desc: string;

  empresa: number;

  comuna: string;
  
  url_proyecto: string;
  
  imagen: string;
  
  direccion: string;
  
  tipologia: number; 
}