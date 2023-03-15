import { Column, PrimaryGeneratedColumn} from 'typeorm';

export class Skills {
    @PrimaryGeneratedColumn()
    public idSkill: number;

    @Column()
    public skill: string;
}

export default Skills;