import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ActualizarServidorDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    nombre?: string;

    @IsOptional()
    @IsString()
    descripcion?: string;
}