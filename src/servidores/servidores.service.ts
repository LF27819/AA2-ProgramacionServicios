import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servidor } from './entities/servidor.entity';
import { Usuario } from '../usuarios/entities/usuario.entity';

@Injectable()
export class ServidoresService {
    constructor(
        @InjectRepository(Servidor)
        private readonly servidorRepository: Repository<Servidor>,

        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
    ) { }

    async obtenerServidores(): Promise<Servidor[]> {
        return this.servidorRepository.find({
            relations: ['owner'],
        });
    }

    async obtenerServidorPorId(id: number): Promise<Servidor> {
        const servidor = await this.servidorRepository.findOne({
            where: { id },
            relations: ['owner'],
        });

        if (!servidor) {
            throw new NotFoundException(`Servidor con id ${id} no encontrado`);
        }

        return servidor;
    }

    async crearServidor(datos: any): Promise<Servidor> {
        const usuario = await this.usuarioRepository.findOneBy({
            id: datos.ownerId,
        });

        if (!usuario) {
            throw new NotFoundException('Usuario propietario no encontrado');
        }

        const servidor = this.servidorRepository.create({
            nombre: datos.nombre,
            descripcion: datos.descripcion,
            owner: usuario,
        });

        return this.servidorRepository.save(servidor);
    }

    async actualizarServidor(id: number, datos: any): Promise<Servidor> {
        const servidor = await this.servidorRepository.findOne({
            where: { id },
            relations: ['owner'],
        });

        if (!servidor) {
            throw new NotFoundException(`Servidor con id ${id} no encontrado`);
        }

        servidor.nombre = datos.nombre ?? servidor.nombre;
        servidor.descripcion = datos.descripcion ?? servidor.descripcion;

        return this.servidorRepository.save(servidor);
    }

    async eliminarServidor(id: number): Promise<{ mensaje: string }> {
        const servidor = await this.servidorRepository.findOneBy({ id });

        if (!servidor) {
            throw new NotFoundException(`Servidor con id ${id} no encontrado`);
        }

        await this.servidorRepository.remove(servidor);

        return { mensaje: 'Servidor eliminado correctamente' };
    }


}