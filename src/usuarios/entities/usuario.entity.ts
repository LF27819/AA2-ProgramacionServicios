import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Servidor } from '../../servidores/entities/servidor.entity';
import { Mensaje } from '../../mensajes/entities/mensaje.entity';

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    nombre!: string;

    @Column({ unique: true, length: 150 })
    email!: string;

    @Column({ length: 255 })
    password!: string;

    @OneToMany(() => Servidor, (servidor) => servidor.owner)
    servidores!: Servidor[];

    @OneToMany(() => Mensaje, (mensaje) => mensaje.usuario)
    mensajes!: Mensaje[];
}