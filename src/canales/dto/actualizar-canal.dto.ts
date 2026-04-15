import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ActualizarCanalDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    nombre?: string;

    @IsOptional()
    @IsString()
    tipo?: string;
}