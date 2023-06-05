import { ApiProperty } from "@nestjs/swagger";

export class createProfileDto{
    @ApiProperty({
        description: 'Id of the profile',
        example: 1,
    })
    idProfile: string;
    
    @ApiProperty({
        description: 'Tesla Alberto da Silva',
        example: 1,
    })
    name: string;
    
    @ApiProperty({
        description: 'Email of the profile' ,
        example: 'teslaalberto@gmail.com',
    })
    email: string;
}

export default createProfileDto;