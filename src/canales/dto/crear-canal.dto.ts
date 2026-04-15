import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CrearCanalDto {
    @ApiProperty({ example: 'DAM' })
    @IsString()
    @IsNotEmpty()
    nombre!: string;

    @ApiProperty({ example: 'texto', required: false })
    @IsOptional()
    @IsString()
    tipo?: string;

    @ApiProperty({ example: 1 })
    @IsInt()
    @IsNotEmpty()
    servidorId!: number;
}