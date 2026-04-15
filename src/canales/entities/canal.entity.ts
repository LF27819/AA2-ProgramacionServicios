import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Servidor } from '../../servidores/entities/servidor.entity';

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
}