import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Canal } from '../../canales/entities/canal.entity';

@Entity('servidores')
export class Servidor {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    nombre!: string;

    @Column({ length: 255, nullable: true })
    descripcion?: string;

    @ManyToOne(() => Usuario, (usuario) => usuario.servidores, {
        onDelete: 'CASCADE',
    })
    owner!: Usuario;

    @OneToMany(() => Canal, (canal) => canal.servidor)
    canales!: Canal[];
}