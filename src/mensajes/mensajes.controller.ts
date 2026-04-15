import { Body, Controller, Get, Post } from '@nestjs/common';
import { MensajesService } from './mensajes.service';

@Controller('mensajes')
export class MensajesController {
    constructor(private readonly mensajesService: MensajesService) { }

    @Get()
    obtenerMensajes() {
        return this.mensajesService.obtenerMensajes();
    }

    @Post()
    crearMensaje(@Body() datos: any) {
        return this.mensajesService.crearMensaje(datos);
    }
}