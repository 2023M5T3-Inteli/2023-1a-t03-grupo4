// Description: data for profile creation table requests
import { IsNotEmpty, IsEnum, IsDateString } from 'class-validator';
export class CreateProfile {
  @IsNotEmpty()
  id_profile: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  email: string;
}
