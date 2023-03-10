import {IsNotEmpty} from 'class-validator';

export class DeleteProfile{
    @IsNotEmpty({message: "idProfile is required"})
    idProfile: number;
}