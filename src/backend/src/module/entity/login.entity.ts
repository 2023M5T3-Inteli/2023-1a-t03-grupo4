import { Column, PrimaryGeneratedColumn,Entity, OneToMany} from 'typeorm';

@Entity()
export class Login{
    @PrimaryGeneratedColumn()
    public id_login: number;

    @Column()
    public username: string;

    @Column()
    public password: string;
}