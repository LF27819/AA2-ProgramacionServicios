import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CrearMensajeDto {
    @ApiProperty({ example: 'Primer mensaje' })
    @IsString()
    @IsNotEmpty()
    contenido!: string;

    @ApiProperty({ example: 1 })
    @IsInt()
    @IsNotEmpty()
    usuarioId!: number;

    @ApiProperty({ example: 1 })
    @IsInt()
    @IsNotEmpty()
    canalId!: number;
}