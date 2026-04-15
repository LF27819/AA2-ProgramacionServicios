import { Body, Controller, Get, Post } from '@nestjs/common';
import { MensajesService } from './mensajes.service';
import { CrearMensajeDto } from './dto/crear-mensaje.dto';

@Controller('mensajes')
export class MensajesController {
    constructor(private readonly mensajesService: MensajesService) { }

    @Get()
    obtenerMensajes() {
        return this.mensajesService.obtenerMensajes();
    }

    @Post()
    crearMensaje(@Body() datos: CrearMensajeDto) {
        return this.mensajesService.crearMensaje(datos);
    }
}