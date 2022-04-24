import { Parametro } from 'src/parametro/parametro.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Indicador {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Parametro, (e) => e)
    @JoinColumn({name: 'idParametro'})
    parametro: number;

    @Column()
    nombre: string;

    @Column()
    desc: string;

    @Column()
    unidad: string;
    
    @Column()
    escala: string;
    
    @Column()
    activo: boolean;
    
    @CreateDateColumn()
    created: string; 
}
  