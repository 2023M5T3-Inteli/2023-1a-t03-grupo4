import { IsNotEmpty, IsUUID } from 'class-validator';

export class deleteSubmission{
    @IsNotEmpty()
    @IsUUID()
    idSubmission: number;
}

export default deleteSubmission;