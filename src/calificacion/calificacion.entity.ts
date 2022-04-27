import { Proyecto } from 'src/proyecto/proyecto.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Calificacion {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Proyecto, (e) => e)
    @JoinColumn({name: 'idProyecto'})
    proyecto: number;

    @Column({type: 'datetime'})
    fechaCalificacion: string;
    
    @Column()
    vigente: boolean;

    @Column()
    urlCalificacion: string;
    
    @CreateDateColumn()
    created: string;
}
  