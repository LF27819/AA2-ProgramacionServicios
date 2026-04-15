import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Canal } from './entities/canal.entity';
import { Servidor } from '../servidores/entities/servidor.entity';

@Injectable()
export class CanalesService {
    constructor(
        @InjectRepository(Canal)
        private readonly canalRepository: Repository<Canal>,

        @InjectRepository(Servidor)
        private readonly servidorRepository: Repository<Servidor>,
    ) { }

    async obtenerCanales(): Promise<Canal[]> {
        return this.canalRepository.find({
            relations: ['servidor'],
        });
    }

    async obtenerCanalPorId(id: number): Promise<Canal> {
        const canal = await this.canalRepository.findOne({
            where: { id },
            relations: ['servidor'],
        });

        if (!canal) {
            throw new NotFoundException(`Canal con id ${id} no encontrado`);
        }

        return canal;
    }

    async crearCanal(datos: any): Promise<Canal> {
        const servidor = await this.servidorRepository.findOneBy({
            id: datos.servidorId,
        });

        if (!servidor) {
            throw new NotFoundException('Servidor no encontrado');
        }

        const canal = this.canalRepository.create({
            nombre: datos.nombre,
            tipo: datos.tipo,
            servidor: servidor,
        });

        return this.canalRepository.save(canal);
    }

    async actualizarCanal(id: number, datos: any): Promise<Canal> {
        const canal = await this.canalRepository.findOne({
            where: { id },
            relations: ['servidor'],
        });

        if (!canal) {
            throw new NotFoundException(`Canal con id ${id} no encontrado`);
        }

        canal.nombre = datos.nombre ?? canal.nombre;
        canal.tipo = datos.tipo ?? canal.tipo;

        return this.canalRepository.save(canal);
    }

    async eliminarCanal(id: number, usuarioId: number): Promise<{ mensaje: string }> {
        const canal = await this.canalRepository.findOne({
            where: { id },
            relations: ['servidor', 'servidor.owner'],
        });

        if (!canal) {
            throw new NotFoundException(`Canal con id ${id} no encontrado`);
        }

        if (canal.servidor.owner.id !== usuarioId) {
            throw new ForbiddenException('Solo el owner del servidor puede eliminar este canal');
        }

        await this.canalRepository.remove(canal);

        return { mensaje: 'Canal eliminado correctamente' };
    }
}