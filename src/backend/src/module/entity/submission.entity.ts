import { Column, Entity, PrimaryGeneratedColumn, Index, ManyToOne, JoinColumn} from 'typeorm';
import { Positions } from './positions.entity';
import { Profile } from './profile.entity';
import { Project } from './project.entity';

@Entity()
export class Submission {

    @PrimaryGeneratedColumn()
    public idSubmission: number;

    @Column()
    public reason: string;

    @Column()
    public stt: string;


    @ManyToOne(()=> Project, (project) => project.idProject, {eager: true})
    @JoinColumn()
    public idProject: Project["idProject"]

    @ManyToOne(()=> Profile, (profile) => profile.id_profile, {eager: true})
    @JoinColumn()
    public id_profile: Profile["id_profile"]

    @ManyToOne(()=> Positions, (position) => position.id_position, {eager: true})
    @JoinColumn()
    public position: Positions["id_position"]
    
}