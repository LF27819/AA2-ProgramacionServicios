import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mensaje } from './entities/mensaje.entity';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { Canal } from '../canales/entities/canal.entity';

@Injectable()
export class MensajesService {
    constructor(
        @InjectRepository(Mensaje)
        private readonly mensajeRepository: Repository<Mensaje>,

        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,

        @InjectRepository(Canal)
        private readonly canalRepository: Repository<Canal>,
    ) { }

    async obtenerMensajes(): Promise<Mensaje[]> {
        return this.mensajeRepository.find({
            relations: ['usuario', 'canal'],
        });
    }

    async crearMensaje(datos: any): Promise<Mensaje> {
        const usuario = await this.usuarioRepository.findOneBy({
            id: datos.usuarioId,
        });

        if (!usuario) {
            throw new NotFoundException('Usuario no encontrado');
        }

        const canal = await this.canalRepository.findOneBy({
            id: datos.canalId,
        });

        if (!canal) {
            throw new NotFoundException('Canal no encontrado');
        }

        const mensaje = this.mensajeRepository.create({
            contenido: datos.contenido,
            usuario,
            canal,
        });

        return this.mensajeRepository.save(mensaje);
    }
}