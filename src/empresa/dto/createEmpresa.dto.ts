import { IsNotEmpty } from 'class-validator';

export class CreateEmpresaDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly rut: number;
}
