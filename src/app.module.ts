import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { ServidoresModule } from './servidores/servidores.module';
import { CanalesModule } from './canales/canales.module';
import { MensajesModule } from './mensajes/mensajes.module';

@Module({
  imports: [UsuariosModule, AutenticacionModule, ServidoresModule, CanalesModule, MensajesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
