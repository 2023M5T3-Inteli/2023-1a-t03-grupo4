import {IsNotEmpty} from 'class-validator';

export class DeleteProject{
    @IsNotEmpty({message: "idProject is required"})
    idProject: number;
}