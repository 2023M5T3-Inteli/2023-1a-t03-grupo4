import { ApiProperty } from "@nestjs/swagger";

export class CreateTechnologiesDto{
    @ApiProperty({
        description: 'Id of the Technology',
        example: 1,
    })
    id_technology : number;

    @ApiProperty({
        description: 'Name of the Technology',
        example: 'Python',
    })
    technology : string;

}

export default CreateTechnologiesDto