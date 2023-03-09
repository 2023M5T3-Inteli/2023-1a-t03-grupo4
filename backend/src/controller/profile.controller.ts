import { Body, Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { ProfilesService } from 'src/service/profiles.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post(`profile`)
  async createProfile(@Body() data: { id_profile: number, name: string; email: string}) {
    const { id_profile, name, email } = data;
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
  async deleteProfile(@Body() data: {idProfile:number}) {
    const idProfile = data;
    return this.profilesService.deleteProfile(idProfile);
  }

}

