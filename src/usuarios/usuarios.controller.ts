import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './entities/usuario.entity';


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
    async crearUsuario(@Body() datosUsuario: Partial<Usuario>): Promise<Usuario> {
        return this.usuariosService.crearUsuario(datosUsuario);
    }

    @Put(':id')
    async actualizarUsuario(
        @Param('id', ParseIntPipe) id: number,
        @Body() datosUsuario: Partial<Usuario>,
    ): Promise<Usuario> {
        return this.usuariosService.actualizarUsuario(id, datosUsuario);
    }

    @Delete(':id')
    async eliminarUsuario(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<{ mensaje: string }> {
        return this.usuariosService.eliminarUsuario(id);
    }
}