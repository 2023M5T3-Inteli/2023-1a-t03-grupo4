import { Column, Entity, PrimaryGeneratedColumn, Index} from 'typeorm';


export class Profile{
    @PrimaryGeneratedColumn()
    public idProfile: number;

    @Column()
    public name: string;

    @Column()
    @Index({ unique: true })
    public email: string;

}
