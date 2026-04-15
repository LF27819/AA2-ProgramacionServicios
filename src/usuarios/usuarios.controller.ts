import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './entities/usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

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
}