import { Column, Entity, PrimaryGeneratedColumn, Index, OneToOne, JoinColumn} from 'typeorm';
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

  @Column()
  @OneToOne((type)=> Profile, (profile) => profile.idProfile)
  @JoinColumn()
  public creator: Profile['idProfile'];

  @Column()
  public area: string;

  @Column()
  public role: string;

  @Column()
  public auth: boolean;
}

