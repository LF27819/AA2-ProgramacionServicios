import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServidoresController } from './servidores.controller';
import { ServidoresService } from './servidores.service';
import { Servidor } from './entities/servidor.entity';
import { Usuario } from '../usuarios/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Servidor, Usuario])],
  controllers: [ServidoresController],
  providers: [ServidoresService],
})
export class ServidoresModule { }