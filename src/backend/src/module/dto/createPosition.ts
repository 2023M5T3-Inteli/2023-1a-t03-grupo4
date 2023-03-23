import { ApiProperty } from "@nestjs/swagger";

export class createPositionDto{
    @ApiProperty({
        description: 'Id of the position',
        example: 1,
    })
    id_position: number;

    @ApiProperty({
        description: 'Position name',
        example: 'Backend',
    })
    position: string;
}
export default createPositionDto