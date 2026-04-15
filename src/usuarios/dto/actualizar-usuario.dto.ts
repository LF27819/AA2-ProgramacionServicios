import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ActualizarUsuarioDto {
    @ApiProperty({ example: 'Lucía 2', required: false })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    nombre?: string;

    @ApiProperty({ example: 'lucia2@gmail.com', required: false })
    @IsOptional()
    @IsEmail()
    @IsNotEmpty()
    email?: string;

    @ApiProperty({ example: '1234567', required: false })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password?: string;
}