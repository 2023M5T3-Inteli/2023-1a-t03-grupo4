import { Column, PrimaryGeneratedColumn, Entity} from 'typeorm';

@Entity()
export class Skills {
    @PrimaryGeneratedColumn()
    public idSkill: number;

    @Column()
    public skill: string;
}

export default Skills;