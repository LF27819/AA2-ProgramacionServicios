import { Body, Controller, Post } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { RegistroDto } from './dto/registro.dto';
import { LoginDto } from './dto/login.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Autenticación')
@Controller('autenticacion')
export class AutenticacionController {
    constructor(
        private readonly autenticacionService: AutenticacionService,
    ) { }

    @ApiOperation({ summary: 'Registrar un nuevo usuario' })
    @ApiResponse({ status: 201, description: 'Usuario registrado correctamente' })
    @Post('registro')
    registro(@Body() datosRegistro: RegistroDto) {
        return this.autenticacionService.registro(datosRegistro);
    }

    @ApiOperation({ summary: 'Iniciar sesión y obtener un token JWT' })
    @ApiResponse({ status: 200, description: 'Login correcto' })
    @Post('login')
    login(@Body() datosLogin: LoginDto) {
        return this.autenticacionService.login(datosLogin);
    }
}