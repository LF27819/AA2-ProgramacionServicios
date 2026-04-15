import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegistroDto {
    @ApiProperty({ example: 'Lucía' })
    @IsString()
    @IsNotEmpty()
    nombre!: string;

    @ApiProperty({ example: 'lucia@gmail.com' })
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @ApiProperty({ example: '123456' })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password!: string;
}