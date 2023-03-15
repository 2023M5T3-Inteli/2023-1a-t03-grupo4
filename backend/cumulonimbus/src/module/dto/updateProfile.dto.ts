import { IsString, IsOptional, IsUUID } from 'class-validator';

export class updateProfileDto {
    @IsUUID()
    idProfile: number;

    @IsString()
    name: string;
    
    @IsString()
    email: string;
}

export default updateProfileDto;