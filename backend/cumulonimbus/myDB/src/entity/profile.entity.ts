import { Column, PrimaryGeneratedColumn, Index, Entity, OneToMany} from 'typeorm';
import {Project} from './project.entity'

@Entity()
export class Profile{

    @PrimaryGeneratedColumn()   
    profile: number;
    
    @Column()
    public name: string;

    @OneToMany(() => Project, (creator) => creator.creator)
    projects : Project[];

    @Column()
    @Index({ unique: true })
    public email: string;
}
export default Profile;
