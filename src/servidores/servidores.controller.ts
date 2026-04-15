import { Body, Controller, Delete, Get, Put, UseGuards, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ServidoresService } from './servidores.service';
import { JwtAuthGuard } from '../autenticacion/jwt-auth.guard';
import { CrearServidorDto } from './dto/crear-servidor.dto';
import { ActualizarServidorDto } from './dto/actualizar-servidor.dto';

@Controller('servidores')
export class ServidoresController {
    constructor(private readonly servidoresService: ServidoresService) { }

    @Get()
    obtenerServidores() {
        return this.servidoresService.obtenerServidores();
    }

    @Get(':id')
    obtenerServidorPorId(@Param('id', ParseIntPipe) id: number) {
        return this.servidoresService.obtenerServidorPorId(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    crearServidor(@Body() datos: CrearServidorDto) {
        return this.servidoresService.crearServidor(datos);
    }

    @Put(':id')
    actualizarServidor(
        @Param('id', ParseIntPipe) id: number,
        @Body() datos: ActualizarServidorDto,
    ) {
        return this.servidoresService.actualizarServidor(id, datos);
    }

    @Delete(':id')
    eliminarServidor(@Param('id', ParseIntPipe) id: number) {
        return this.servidoresService.eliminarServidor(id);
    }
}