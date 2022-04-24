import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Ambito {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
   
    @Column()
    desc: string;
   
    @Column()
    activo: boolean;
   
    @CreateDateColumn()
    created: string;
}
  