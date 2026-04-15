import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CrearMensajeDto {
    @IsString()
    @IsNotEmpty()
    contenido!: string;

    @IsInt()
    @IsNotEmpty()
    usuarioId!: number;

    @IsInt()
    @IsNotEmpty()
    canalId!: number;
}