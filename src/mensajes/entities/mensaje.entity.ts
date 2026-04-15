import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Canal } from '../../canales/entities/canal.entity';

@Entity('mensajes')
export class Mensaje {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 500 })
    contenido!: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha!: Date;

    @ManyToOne(() => Usuario, {
        onDelete: 'CASCADE',
    })
    usuario!: Usuario;

    @ManyToOne(() => Canal, {
        onDelete: 'CASCADE',
    })
    canal!: Canal;
}