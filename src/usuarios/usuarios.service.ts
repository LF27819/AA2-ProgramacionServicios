import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) { }

  async obtenerUsuarios(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async obtenerUsuarioPorId(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({ id });

    if (!usuario) {
      throw new NotFoundException(`No se ha encontrado el usuario con id ${id}`);
    }

    return usuario;
  }

  async crearUsuario(datosUsuario: Partial<Usuario>): Promise<Usuario> {
    const nuevoUsuario = this.usuarioRepository.create(datosUsuario);
    return this.usuarioRepository.save(nuevoUsuario);
  }

  async actualizarUsuario(id: number, datosUsuario: Partial<Usuario>): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({ id });

    if (!usuario) {
      throw new NotFoundException(`No se ha encontrado el usuario con id ${id}`);
    }

    const usuarioActualizado = Object.assign(usuario, datosUsuario);
    return await this.usuarioRepository.save(usuarioActualizado);
  }

  async eliminarUsuario(id: number): Promise<{ mensaje: string }> {
    const usuario = await this.usuarioRepository.findOneBy({ id });

    if (!usuario) {
      throw new NotFoundException(`No se ha encontrado el usuario con id ${id}`);
    }

    await this.usuarioRepository.remove(usuario);

    return { mensaje: 'Usuario eliminado correctamente' };
  }
}