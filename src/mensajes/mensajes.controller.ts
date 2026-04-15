import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { MensajesService } from './mensajes.service';
import { CrearMensajeDto } from './dto/crear-mensaje.dto';
import { JwtAuthGuard } from '../autenticacion/jwt-auth.guard';

@Controller('mensajes')
export class MensajesController {
    constructor(private readonly mensajesService: MensajesService) { }

    @Get()
    obtenerMensajes() {
        return this.mensajesService.obtenerMensajes();
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    crearMensaje(@Body() datos: CrearMensajeDto) {
        return this.mensajesService.crearMensaje(datos);
    }
}