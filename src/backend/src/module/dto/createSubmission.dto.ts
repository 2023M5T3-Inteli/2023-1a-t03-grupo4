import {Project} from '../entity/project.entity';
import {Profile} from '../entity/profile.entity';
import { Positions } from '../entity/positions.entity';
import { ApiProperty } from "@nestjs/swagger";

export class CreateSubmissionDto {
    @ApiProperty({
        description: 'Id of the Submission',
        example: 1,
    })
    idSubmission: number;
    
    @ApiProperty({
        description: 'Id of the Profile',
        example: 1,
    })
    id_profile: Profile;
    
    @ApiProperty({
        description: 'Id of the Project',
        example: 1,
    })
    idproject: Project;
    
    @ApiProperty({
        description: 'Why you want to work in this project',
        example: 'I want to work in this project because I want to learn more about the subject',
    })
    reason: string;
    
    @ApiProperty({
        description: 'Status of the Submission',
        example: 'In progress',
    })
    stt: string;
    
    //Vai trocar pelo id
    @ApiProperty({
        description: 'Position of the Submission',
        example: 'Backend',
    })
    position: Positions;

}

export default CreateSubmissionDto;