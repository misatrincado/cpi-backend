import { IsNotEmpty } from 'class-validator';

export class UpdatesParametroDto {
  @IsNotEmpty()
  id: number;

  desc: string;

  activo: boolean;
}