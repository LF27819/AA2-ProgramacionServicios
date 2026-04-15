import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { MensajesService } from './mensajes.service';
import { CrearMensajeDto } from './dto/crear-mensaje.dto';
import { JwtAuthGuard } from '../autenticacion/jwt-auth.guard';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Mensajes')
@Controller('mensajes')
export class MensajesController {
    constructor(private readonly mensajesService: MensajesService) { }

    @ApiOperation({ summary: 'Obtener todos los mensajes' })
    @ApiResponse({ status: 200, description: 'Lista de mensajes obtenida correctamente' })
    @Get()
    obtenerMensajes() {
        return this.mensajesService.obtenerMensajes();
    }

    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Crear un nuevo mensaje' })
    @ApiResponse({ status: 201, description: 'Mensaje creado correctamente' })
    @UseGuards(JwtAuthGuard)
    @Post()
    crearMensaje(@Body() datos: CrearMensajeDto) {
        return this.mensajesService.crearMensaje(datos);
    }
}