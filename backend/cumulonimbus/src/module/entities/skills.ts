import { Column, Entity, PrimaryGeneratedColumn, Index} from 'typeorm';

export class Skills {
    @PrimaryGeneratedColumn()
    public idSkill: number;

    @Column()
    public skill: string;

    


}