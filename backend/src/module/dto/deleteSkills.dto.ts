import { IsNotEmpty, IsUUID } from 'class-validator';

export class DeleteSkills{
    @IsNotEmpty()
    @IsUUID()
    idSkill: number;
}

export default DeleteSkills;