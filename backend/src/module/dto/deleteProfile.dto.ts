import { IsNotEmpty, IsUUID } from 'class-validator';

export class deleteProfileDto{
  @IsNotEmpty()
  @IsUUID()
  id: number;
}

export default deleteProfileDto;