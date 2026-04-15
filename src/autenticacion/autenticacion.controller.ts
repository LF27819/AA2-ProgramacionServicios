import { Body, Controller, Post } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { RegistroDto } from './dto/registro.dto';
import { LoginDto } from './dto/login.dto';

@Controller('autenticacion')
export class AutenticacionController {
    constructor(
        private readonly autenticacionService: AutenticacionService,
    ) { }

    @Post('registro')
    registro(@Body() datosRegistro: RegistroDto) {
        return this.autenticacionService.registro(datosRegistro);
    }

    @Post('login')
    login(@Body() datosLogin: LoginDto) {
        return this.autenticacionService.login(datosLogin);
    }
}