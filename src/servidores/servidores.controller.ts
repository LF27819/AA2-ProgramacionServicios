import { Body, Controller, Delete, Get, Put, UseGuards, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ServidoresService } from './servidores.service';
import { JwtAuthGuard } from '../autenticacion/jwt-auth.guard';
import { CrearServidorDto } from './dto/crear-servidor.dto';
import { ActualizarServidorDto } from './dto/actualizar-servidor.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Servidores')
@Controller('servidores')
export class ServidoresController {
    constructor(private readonly servidoresService: ServidoresService) { }

    @ApiOperation({ summary: 'Obtener todos los servidores' })
    @ApiResponse({ status: 200, description: 'Lista de servidores obtenida correctamente' })
    @Get()
    obtenerServidores() {
        return this.servidoresService.obtenerServidores();
    }

    @ApiOperation({ summary: 'Obtener un servidor por su id' })
    @ApiResponse({ status: 200, description: 'Servidor obtenido correctamente' })
    @Get(':id')
    obtenerServidorPorId(@Param('id', ParseIntPipe) id: number) {
        return this.servidoresService.obtenerServidorPorId(id);
    }

    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Crear un nuevo servidor' })
    @ApiResponse({ status: 201, description: 'Servidor creado correctamente' })
    @UseGuards(JwtAuthGuard)
    @Post()
    crearServidor(@Body() datos: CrearServidorDto) {
        return this.servidoresService.crearServidor(datos);
    }

    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Actualizar un servidor existente' })
    @ApiResponse({ status: 200, description: 'Servidor actualizado correctamente' })
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    actualizarServidor(
        @Param('id', ParseIntPipe) id: number,
        @Body() datos: ActualizarServidorDto,
    ) {
        return this.servidoresService.actualizarServidor(id, datos);
    }

    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Eliminar un servidor por su id' })
    @ApiResponse({ status: 200, description: 'Servidor eliminado correctamente' })
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    eliminarServidor(@Param('id', ParseIntPipe) id: number) {
        return this.servidoresService.eliminarServidor(id);
    }
}