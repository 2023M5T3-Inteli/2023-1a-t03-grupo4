// export class Submission {}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Submission {
  @PrimaryGeneratedColumn('increment')
  id_submission: number;

  @Column()
  id_project: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  role: string;
  
  @Column()
  justification: Date;

  @Column()
  technologies: Date;

  @Column()
  skills: string;

  @Column()
  status: string;
}
