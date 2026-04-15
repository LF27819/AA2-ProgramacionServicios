import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CrearServidorDto {
    @IsString()
    @IsNotEmpty()
    nombre!: string;

    @IsOptional()
    @IsString()
    descripcion?: string;

    @IsInt()
    @IsNotEmpty()
    ownerId!: number;
}