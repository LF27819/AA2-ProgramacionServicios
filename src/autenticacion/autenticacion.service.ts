import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { RegistroDto } from './dto/registro.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AutenticacionService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
        private readonly jwtService: JwtService,
    ) { }

    async registro(datosRegistro: RegistroDto) {
        const usuarioExistente = await this.usuarioRepository.findOneBy({
            email: datosRegistro.email,
        });

        if (usuarioExistente) {
            throw new ConflictException('Ya existe un usuario con ese email');
        }

        const passwordHasheada = await bcrypt.hash(datosRegistro.password, 10);

        const nuevoUsuario = this.usuarioRepository.create({
            nombre: datosRegistro.nombre,
            email: datosRegistro.email,
            password: passwordHasheada,
        });

        const usuarioGuardado = await this.usuarioRepository.save(nuevoUsuario);

        return {
            mensaje: 'Usuario registrado correctamente',
            usuario: {
                id: usuarioGuardado.id,
                nombre: usuarioGuardado.nombre,
                email: usuarioGuardado.email,
            },
        };
    }

    async login(datosLogin: LoginDto) {
        const usuario = await this.usuarioRepository.findOneBy({
            email: datosLogin.email,
        });

        if (!usuario) {
            throw new UnauthorizedException('Credenciales incorrectas');
        }

        const passwordCorrecta = await bcrypt.compare(
            datosLogin.password,
            usuario.password,
        );

        if (!passwordCorrecta) {
            throw new UnauthorizedException('Credenciales incorrectas');
        }

        const payload = {
            sub: usuario.id,
            email: usuario.email,
            nombre: usuario.nombre,
        };

        const accessToken = await this.jwtService.signAsync(payload);

        return {
            access_token: accessToken,
            usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email,
            },
        };
    }
}