import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, Length, Min, Max } from "class-validator";

export class CreateCatDto {
  @IsString({
    message: 'Tá errado'
  })
  @Length(4, 10, {
    message: 'Erro de Lenght. Tamanho inválido'
  })
  @ApiProperty()
  name: string;

  @IsNumber()
  @Min(10, {
    message: 'Campo menor que 10'
  })
  @Max(30, {
    message: 'Campo maior que 30'
  })
  @ApiProperty()
  age: number;

  @IsString()
  @ApiProperty()
  breed: string;
}