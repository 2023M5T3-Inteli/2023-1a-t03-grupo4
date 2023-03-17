import { Column, Entity, PrimaryGeneratedColumn, Index, OneToOne, JoinColumn} from 'typeorm';
import { Profile } from './profile.entity';
import { Project } from './project.entity';

@Entity()
export class Submission {

    @PrimaryGeneratedColumn()
    public idSubmission: number;

    @Column()
    public name: string;

    @OneToOne(()=> Project, (project) => project.idProject)
    @JoinColumn()
    public idProject: Project["idProject"]

    @Column()
    public reason: string;

    @Index({unique:true})
    @Column()
    public email: string;

    @Column()
    public stt: string;

    
}