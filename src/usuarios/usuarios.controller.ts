import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './entities/usuario.entity';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';


@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) { }

    @Get()
    async obtenerUsuarios(): Promise<Usuario[]> {
        return this.usuariosService.obtenerUsuarios();
    }

    @Get(':id')
    async obtenerUsuarioPorId(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<Usuario> {
        return this.usuariosService.obtenerUsuarioPorId(id);
    }

    @Post()
    async crearUsuario(@Body() datosUsuario: CrearUsuarioDto) {
        return this.usuariosService.crearUsuario(datosUsuario);
    }

    @Put(':id')
    async actualizarUsuario(
        @Param('id', ParseIntPipe) id: number,
        @Body() datosUsuario: ActualizarUsuarioDto,
    ) {
        return this.usuariosService.actualizarUsuario(id, datosUsuario);
    }

    @Delete(':id')
    async eliminarUsuario(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<{ mensaje: string }> {
        return this.usuariosService.eliminarUsuario(id);
    }
}