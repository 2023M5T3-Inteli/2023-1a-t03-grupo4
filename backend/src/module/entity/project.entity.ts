import { profile } from 'console';
import { type } from 'os';
import { Column, Entity, PrimaryGeneratedColumn, Index, ManyToOne, JoinColumn} from 'typeorm';
import { Profile } from './profile.entity';

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

  @ManyToOne(() => Profile, (coreator) => coreator.projects, {eager: true})
  creator : Profile;

  @Column()
  public area: string;

  @Column()
  public role: string;

  @Column()
  public auth: boolean;
}

export default Project;

