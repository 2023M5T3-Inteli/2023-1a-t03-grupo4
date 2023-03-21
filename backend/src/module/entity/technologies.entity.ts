import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Technologies{
   
    @PrimaryGeneratedColumn()
    public id_technology: number;

    @Column()
    public technology: string;
}

export default Technologies;