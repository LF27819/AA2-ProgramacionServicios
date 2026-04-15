import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ActualizarCanalDto {
    @ApiProperty({ example: 'DAM 2026', required: false })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    nombre?: string;

    @ApiProperty({ example: 'texto', required: false })
    @IsOptional()
    @IsString()
    tipo?: string;
}