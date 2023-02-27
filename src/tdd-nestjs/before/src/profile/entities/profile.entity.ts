// export class Profile {}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('increment')
  id_project: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  area: string;

  @Column()
  skill: string;

  @Column()
  projects: string;

  @Column()
  gestor: string;

  @Column()
  numberProjects: string;
}
