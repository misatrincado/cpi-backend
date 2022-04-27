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
   
    @Column({nullable: true})
    color: string;
   
    @CreateDateColumn()
    created: string;
}
  