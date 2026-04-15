import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajesController } from './mensajes.controller';
import { MensajesService } from './mensajes.service';
import { Mensaje } from './entities/mensaje.entity';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { Canal } from '../canales/entities/canal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mensaje, Usuario, Canal])],
  controllers: [MensajesController],
  providers: [MensajesService],
})
export class MensajesModule { }