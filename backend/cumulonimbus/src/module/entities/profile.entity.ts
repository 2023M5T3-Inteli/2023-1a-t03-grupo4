import { Column, PrimaryGeneratedColumn, Index, Entity} from 'typeorm';
@Entity()
export class Profile{
    @PrimaryGeneratedColumn()
    public idProfile: number;
    @Column()
    public name: string;
    @Column()
    @Index({ unique: true })
    public email: string;
}
export default Profile;