import { Column, PrimaryGeneratedColumn, Index, Entity, OneToMany, ManyToMany, JoinTable} from 'typeorm';
import {Project} from './project.entity'
import {Skills} from './skills.entity';

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

    @ManyToMany(() => Skills)
    @JoinTable()
    skills: Skills[]

}
export default Profile;
