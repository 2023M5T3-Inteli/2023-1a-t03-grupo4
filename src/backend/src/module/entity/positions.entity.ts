import { Column, PrimaryGeneratedColumn,Entity, OneToMany} from 'typeorm';
import { Submission } from './submission.entity'

@Entity()
export class Positions{
    @PrimaryGeneratedColumn()
    public id_position: number;

    @Column()
    public position: string;

    // @OneToMany(() => Submission, (position) => position.position)
    // submissions:Submission[]
}