import { profile } from 'console';
import { type } from 'os';
import { join } from 'path';
import { Column, Entity, PrimaryGeneratedColumn, Index, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import { Positions } from './positions.entity';
import { Profile } from './profile.entity';
import Skills from './skills.entity';
import { Technologies } from './technologies.entity';

@Entity()
export class Project {
    
  @PrimaryGeneratedColumn()
  public idProject: number;

  @Index({ unique: true })
  @Column()
  public title: string;

  @Column()
  public description: string;

  @Column()
  public stt: string;

  @Column()
  public submission_date: Date;

  @Column()
  public  date_initial: Date;

  @Column()
  public date_end: Date;

  @ManyToOne(() => Profile, (creator) => creator.id_profile, {eager: true})
  creator : Profile;

  @Column()
  public area: string;

  @Column()
  public role: string;

  @Column()
  public auth: boolean;

  @ManyToMany(() => Skills)
  @JoinTable()
  skills: Skills[]

  @ManyToMany(() => Positions)
  @JoinTable()
  positions: Positions[]

  @ManyToMany(() => Technologies)
  @JoinTable()
  technologies: Technologies[]
}

export default Project;

