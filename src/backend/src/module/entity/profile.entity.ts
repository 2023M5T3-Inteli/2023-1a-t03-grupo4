import { Column, PrimaryGeneratedColumn, Index, Entity, ManyToMany, JoinTable, OneToOne, JoinColumn, PrimaryColumn} from 'typeorm';
import {Project} from './project.entity'
import {Skills} from './skills.entity';
import { Technologies } from './technologies.entity';

@Entity()
export class Profile{

    @PrimaryColumn()   
    id_profile: string;
    
    @Column()
    public name: string;

    @Column()
    @Index({ unique: true })
    public email: string;

    @ManyToMany(() => Skills, {eager: true})
    @JoinTable()
    skills: Skills[]

    @ManyToMany(() => Technologies, {eager: true})
    @JoinTable()
    technologies: Technologies[]
  
    @OneToOne(()=> Profile, (profile) => profile.id_profile)
    @JoinColumn()
    manager: Profile["id_profile"]

    @ManyToMany(() => Profile)
    @JoinTable()
    team: Profile[]
}
export default Profile;
