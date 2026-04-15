import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { CanalesService } from './canales.service';
import { CrearCanalDto } from './dto/crear-canal.dto';
import { ActualizarCanalDto } from './dto/actualizar-canal.dto';
import { JwtAuthGuard } from '../autenticacion/jwt-auth.guard';

@Controller('canales')
export class CanalesController {
    constructor(private readonly canalesService: CanalesService) { }

    @Get()
    obtenerCanales() {
        return this.canalesService.obtenerCanales();
    }

    @Get(':id')
    obtenerCanalPorId(@Param('id', ParseIntPipe) id: number) {
        return this.canalesService.obtenerCanalPorId(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    crearCanal(@Body() datos: CrearCanalDto) {
        return this.canalesService.crearCanal(datos);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    actualizarCanal(
        @Param('id', ParseIntPipe) id: number,
        @Body() datos: ActualizarCanalDto,
    ) {
        return this.canalesService.actualizarCanal(id, datos);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    eliminarCanal(@Param('id', ParseIntPipe) id: number) {
        return this.canalesService.eliminarCanal(id);
    }
}