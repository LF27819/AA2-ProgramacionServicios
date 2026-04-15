import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CrearServidorDto {
    @ApiProperty({ example: 'Servidor 1' })
    @IsString()
    @IsNotEmpty()
    nombre!: string;

    @ApiProperty({ example: 'Servidor 1 del proyecto', required: false })
    @IsOptional()
    @IsString()
    descripcion?: string;

    @ApiProperty({ example: 1 })
    @IsInt()
    @IsNotEmpty()
    ownerId!: number;
}