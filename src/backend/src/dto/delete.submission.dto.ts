import {IsNotEmpty} from 'class-validator';

export class DeleteSubmission{
    @IsNotEmpty({message: "idSubmission is required"})
    idSubmission: number;
}