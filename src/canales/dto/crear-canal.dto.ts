import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CrearCanalDto {
    @IsString()
    @IsNotEmpty()
    nombre!: string;

    @IsOptional()
    @IsString()
    tipo?: string;

    @IsInt()
    @IsNotEmpty()
    servidorId!: number;
}