import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OneToMany } from 'typeorm';
import { Servidor } from '../../servidores/entities/servidor.entity';

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
}