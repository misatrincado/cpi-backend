import { Ambito } from 'src/ambito/ambito.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Subambito {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Ambito, (e) => e) 
    @JoinColumn({name: 'idAmbito'})
    ambito: number;

    @Column()
    nombre: string;
    
    @Column()
    desc: string;
    
    @Column()
    activo: boolean;
    
    @CreateDateColumn()
    created: string;
}
  