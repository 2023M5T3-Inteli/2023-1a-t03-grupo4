// Description: data for project table creation requests
import { IsNotEmpty, IsEnum, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProject {
  @ApiProperty({
    description: 'Project ID',
    example: '1',
  })
  @IsNotEmpty()
  idProject: number;

  @ApiProperty({
    description: 'Project Title',
    example: 'Automation Project',
  })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Description of the project',
    example:
      'Neste projeto, será feito uma automatização da aplicação web da empresa.',
  })
  description: string;

  @ApiProperty({
    description: 'Deadline for submissions',
    example: '2023-03-13T16:02:02.516Z',
  })
  @IsDateString()
  submission_date: Date;

  @ApiProperty({
    description: 'Date when it start',
    example: '2007-02-04T06:02:02.516Z',
  })
  @IsDateString()
  period: Date;

  @ApiProperty({
    description: 'You´re gonna feel',
    example: 'pipipipopopo',
  })
  specification: string;

  @ApiProperty({
    description: 'Choose an area',
    example: 'Back-end',
  })
  @IsNotEmpty()
  area: string;

  @ApiProperty({
    description: 'Roles enabled for the project',
    example: 'Front-end dev',
  })
  role: string;

  @ApiProperty({
    description: 'Authorization from manager',
    example: true,
  })
  @IsNotEmpty()
  auth: boolean;

  @ApiProperty({
    description: 'Author ID from profile',
    example: 10,
  })
  @IsNotEmpty()
  creator: number;
}
