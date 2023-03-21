import { Column, PrimaryGeneratedColumn, Index, Entity, OneToMany, ManyToMany, JoinTable} from 'typeorm';

export class Positions{
    @PrimaryGeneratedColumn()
    @Column()
    public id_position: number;

    @Column()
    public position: string;
}