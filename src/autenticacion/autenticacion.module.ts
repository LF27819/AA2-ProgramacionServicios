import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { AutenticacionController } from './autenticacion.controller';
import { AutenticacionService } from './autenticacion.service';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    ConfigModule,
    PassportModule,
    TypeOrmModule.forFeature([Usuario]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'supersecreto123',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  controllers: [AutenticacionController],
  providers: [AutenticacionService, JwtStrategy],
  exports: [AutenticacionService, JwtModule, PassportModule],
})
export class AutenticacionModule { }