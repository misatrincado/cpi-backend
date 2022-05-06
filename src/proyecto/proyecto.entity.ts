import { Comuna } from 'src/comuna/comuna.entity';
import { Empresa } from 'src/empresa/empresa.entity';
import { Tipologia } from 'src/tipologia/tipologia.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Proyecto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    desc: string;

    @ManyToOne(() => Empresa, (e) => e)
    @JoinColumn({name: 'idEmpresa'})
    empresa: number;

    @ManyToOne(() => Comuna, (e) => e)
    @JoinColumn({name: 'idComuna'})
    comuna: number;
    
    @Column()
    url_proyecto: string;
    
    @Column()
    imagen: string;
    
    @Column()
    direccion: string;
    
    @ManyToOne(() => Tipologia, (e) => e)
    @JoinColumn({name: 'idTipologia'})
    tipologia: number;

    @CreateDateColumn()
    created: string;
    
}
  