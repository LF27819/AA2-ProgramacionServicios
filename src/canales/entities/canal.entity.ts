import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Servidor } from '../../servidores/entities/servidor.entity';
import { Mensaje } from '../../mensajes/entities/mensaje.entity';

@Entity('canales')
export class Canal {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    nombre!: string;

    @Column({ length: 50, default: 'texto' })
    tipo!: string;

    @ManyToOne(() => Servidor, (servidor) => servidor.canales, {
        onDelete: 'CASCADE',
    })
    servidor!: Servidor;

    @OneToMany(() => Mensaje, (mensaje) => mensaje.canal)
    mensajes!: Mensaje[];
}