import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CanalesController } from './canales.controller';
import { CanalesService } from './canales.service';
import { Canal } from './entities/canal.entity';
import { Servidor } from '../servidores/entities/servidor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Canal, Servidor])],
  controllers: [CanalesController],
  providers: [CanalesService],
})
export class CanalesModule {}