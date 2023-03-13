// Description: data for profile table deletion requests

import {IsNotEmpty} from 'class-validator';

export class DeleteProfile{
    @IsNotEmpty({message: "idProfile is required"})
    idProfile: number;
}