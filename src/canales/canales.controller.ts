import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CanalesService } from './canales.service';
import { CrearCanalDto } from './dto/crear-canal.dto';
import { ActualizarCanalDto } from './dto/actualizar-canal.dto';

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

    @Post()
    crearCanal(@Body() datos: CrearCanalDto) {
        return this.canalesService.crearCanal(datos);
    }

    @Put(':id')
    actualizarCanal(
        @Param('id', ParseIntPipe) id: number,
        @Body() datos: ActualizarCanalDto,
    ) {
        return this.canalesService.actualizarCanal(id, datos);
    }

    @Delete(':id')
    eliminarCanal(@Param('id', ParseIntPipe) id: number) {
        return this.canalesService.eliminarCanal(id);
    }
}