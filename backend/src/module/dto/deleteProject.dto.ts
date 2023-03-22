import { IsNotEmpty, IsUUID } from 'class-validator';

export class DeleteProject{
    @IsNotEmpty()
    @IsUUID()
    idProject: number;
}
export default DeleteProject;