import { Parametro } from 'src/parametro/parametro.entity';
import { Tipologia } from 'src/tipologia/tipologia.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Indicador {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Parametro, (e) => e)
    @JoinColumn({name: 'idParametro'})
    parametro: number;


    @ManyToOne(() => Tipologia, (e) => e)
    @JoinColumn({name: 'idTipologia'})
    tipologia: number;

    @Column()
    nombre: string;

    @Column()
    desc: string;

    @Column()
    unidad: string;
    
    @Column({
        length: 1000
    })
    escala: string;
    
    @Column()
    activo: boolean;
    
    @CreateDateColumn()
    created: string; 
}
  