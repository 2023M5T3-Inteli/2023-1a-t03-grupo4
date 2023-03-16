import { Column, PrimaryGeneratedColumn, Index, Entity, OneToMany} from 'typeorm';
import {Project} from './project.entity'

@Entity()
export class Profile{
    @PrimaryGeneratedColumn()
    @OneToMany(() => Project, (project) => project.profile)
    profile: Project[];
    
    public idProfile: number;
    @Column()
    public name: string;
    @Column()
    @Index({ unique: true })
    public email: string;
}
export default Profile;
