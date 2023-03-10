import { Body, Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiParam } from '@nestjs/swagger';
import { ProfilesService } from 'src/service/profiles.service';
import { CreateProfile } from 'src/dto/create.profile.dto';
import { DeleteProfile } from 'src/dto/delete.profile.dto';

@ApiTags ('Profile')
@Controller('api')
export class ProfileController {
  constructor(private readonly profilesService: ProfilesService) {}
  
  @Post(`profile`)
  async createProfile(@Body() createProfile:CreateProfile) {
    const { id_profile, name, email } = createProfile;
    return this.profilesService.createProfile({
        id_profile,
        name,
        email
    });
  }

  @Get('profile')
  getProfile() {
    return this.profilesService.getProfile();
  }
  
  @Delete(`profile`)
  async deleteProfile(@Body() deleteProfile:DeleteProfile) {
    const id_profile = deleteProfile;
    return this.profilesService.deleteProfile(id_profile);
  }

}

