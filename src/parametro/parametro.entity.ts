import { Subambito } from 'src/subambito/subambito.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Parametro {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Subambito, (e) => e)
    @JoinColumn({name: 'idSubambito'})
    subambito: number;

    @Column()
    nombre: string;

    @Column()
    desc: string;

    @Column()
    activo: boolean;
    
    @CreateDateColumn()
    created: string; 
}
  