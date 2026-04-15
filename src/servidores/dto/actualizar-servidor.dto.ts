import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ActualizarServidorDto {
    @ApiProperty({ example: 'Servidor actualizado', required: false })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    nombre?: string;

    @ApiProperty({ example: 'Servidor del proyecto', required: false })
    @IsOptional()
    @IsString()
    descripcion?: string;
}