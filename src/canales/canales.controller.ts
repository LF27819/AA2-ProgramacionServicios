import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, Req } from '@nestjs/common';
import { CanalesService } from './canales.service';
import { CrearCanalDto } from './dto/crear-canal.dto';
import { ActualizarCanalDto } from './dto/actualizar-canal.dto';
import { JwtAuthGuard } from '../autenticacion/jwt-auth.guard';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Canales')
@Controller('canales')
export class CanalesController {
    constructor(private readonly canalesService: CanalesService) { }

    @ApiOperation({ summary: 'Obtener todos los canales' })
    @ApiResponse({ status: 200, description: 'Lista de canales obtenida correctamente' })
    @Get()
    obtenerCanales() {
        return this.canalesService.obtenerCanales();
    }

    @ApiOperation({ summary: 'Obtener un canal por su id' })
    @ApiResponse({ status: 200, description: 'Canal obtenido correctamente' })
    @Get(':id')
    obtenerCanalPorId(@Param('id', ParseIntPipe) id: number) {
        return this.canalesService.obtenerCanalPorId(id);
    }

    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Crear un nuevo canal' })
    @ApiResponse({ status: 201, description: 'Canal creado correctamente' })
    @UseGuards(JwtAuthGuard)
    @Post()
    crearCanal(@Body() datos: CrearCanalDto) {
        return this.canalesService.crearCanal(datos);
    }

    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Actualizar un canal existente' })
    @ApiResponse({ status: 200, description: 'Canal actualizado correctamente' })
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    actualizarCanal(
        @Param('id', ParseIntPipe) id: number,
        @Body() datos: ActualizarCanalDto,
    ) {
        return this.canalesService.actualizarCanal(id, datos);
    }

    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Eliminar un canal por su id' })
    @ApiResponse({ status: 200, description: 'Canal eliminado correctamente' })
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    eliminarCanal(
        @Param('id', ParseIntPipe) id: number,
        @Req() req: any,
    ) {
        return this.canalesService.eliminarCanal(id, req.user.id);
    }
}