import { Profile } from '../entity/profile.entity'
import { ApiProperty } from "@nestjs/swagger";


export class CreateProject{
    @ApiProperty({
        description: 'ProjectID',
        example: 1,
    })
    idProject: number;

    @ApiProperty({
        description: "Project's Title",
        example: 'Project with Python',
    })
    title: string;

    @ApiProperty({
        description: 'Description of the project',
        example: 'This project is about Python',
    })
    description: string;

    @ApiProperty({
        description: 'Status of the project',
        example: 'In progress',
    })
    stt: string;

    @ApiProperty({
        description: 'Submission date of the project',
        example: '2020-12-12',
    })
    submission_date: Date;

    @ApiProperty({
        description: 'When the project starts',
        example: '2020-12-12',
    })
    date_initial: Date;

    @ApiProperty({
        description: 'When the project ends',
        example: '2020-12-12',
    })
    date_end: Date;

    @ApiProperty({
        description: 'Who created the project',
        example: 1,
    })
    creator: Profile;

    @ApiProperty({
        description: 'Area of the project',
        example: 'DevOps',
    })
    area: string;

    //Trocar para position
    @ApiProperty({
        description: 'Role atuation',
        example: 'Backend',
    })
    role: string;

    @ApiProperty({
        description: 'Project was authorized?',
        example: true,
    })
    auth: boolean;
}

export default CreateProject;