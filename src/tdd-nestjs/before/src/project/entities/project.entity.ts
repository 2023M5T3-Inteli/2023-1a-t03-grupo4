// export class Project {
//     id_project: number;
//     title: string;
//     description: string;
//     stt: string;
// }

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('increment')
  id_project: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  stt: string;
  
  @Column()
  submissiondate: Date;

  @Column()
  period: Date;

  @Column()
  specification: string;

  @Column()
  team: string;

  @Column()
  area: string;

  @Column()
  role: string;

  @Column()
  auth: string;

  @Column()
  creator: string;
}
