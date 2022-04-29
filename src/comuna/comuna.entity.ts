import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Comuna {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @CreateDateColumn()
    created: string;
}
