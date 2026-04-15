import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './entities/usuario.entity';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuarios')
@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) { }

    @ApiOperation({ summary: 'Obtener todos los usuarios' })
    @ApiResponse({ status: 200, description: 'Lista de usuarios obtenida correctamente' })
    @Get()
    async obtenerUsuarios(): Promise<Usuario[]> {
        return this.usuariosService.obtenerUsuarios();
    }

    @ApiOperation({ summary: 'Obtener un usuario por su id' })
    @ApiResponse({ status: 200, description: 'Usuario obtenido correctamente' })
    @Get(':id')
    async obtenerUsuarioPorId(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<Usuario> {
        return this.usuariosService.obtenerUsuarioPorId(id);
    }

    @ApiOperation({ summary: 'Crear un nuevo usuario' })
    @ApiResponse({ status: 201, description: 'Usuario creado correctamente' })
    @Post()
    async crearUsuario(@Body() datosUsuario: CrearUsuarioDto) {
        return this.usuariosService.crearUsuario(datosUsuario);
    }

    @ApiOperation({ summary: 'Actualizar un usuario existente' })
    @ApiResponse({ status: 200, description: 'Usuario actualizado correctamente' })
    @Put(':id')
    async actualizarUsuario(
        @Param('id', ParseIntPipe) id: number,
        @Body() datosUsuario: ActualizarUsuarioDto,
    ) {
        return this.usuariosService.actualizarUsuario(id, datosUsuario);
    }

    @ApiOperation({ summary: 'Eliminar un usuario por su id' })
    @ApiResponse({ status: 200, description: 'Usuario eliminado correctamente' })
    @Delete(':id')
    async eliminarUsuario(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<{ mensaje: string }> {
        return this.usuariosService.eliminarUsuario(id);
    }
}