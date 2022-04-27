import { Calificacion } from 'src/calificacion/calificacion.entity';
import { Empresa } from 'src/empresa/empresa.entity';
import { Indicador } from 'src/indicador/indicador.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Resultados {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Indicador, (e) => e)
    @JoinColumn({name: 'idIndicador'})
    indicador: number;
    
    @ManyToOne(() => Calificacion, (e) => e)
    @JoinColumn({name: 'idCalificacion'})
    calificacion: number;

    @Column()
    valor: string;
    
    @Column()
    puntos: string;
    
    @CreateDateColumn()
    created: string;
    
}
  