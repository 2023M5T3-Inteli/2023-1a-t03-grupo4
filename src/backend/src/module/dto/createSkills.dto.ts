import { ApiProperty } from "@nestjs/swagger";

export class CreateSkills{
    @ApiProperty({
        description: 'Id of the Skill',
        example: 1,
    })
    idSkill: number;

    @ApiProperty({
        description: 'Skill',
        example: 'Comunication',
    })
    skill: string;
}

export default CreateSkills;