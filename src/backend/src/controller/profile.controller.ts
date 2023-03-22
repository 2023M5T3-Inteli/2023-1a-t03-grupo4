<<<<<<< HEAD:src/backend/src/controller/profile.controller.ts
/*Description: It handles the incoming HTTP requests and sends the response back to the caller, specifically from the Profile table */

import { Body, Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiParam } from '@nestjs/swagger';
import { ProfilesService } from 'src/service/profiles.service';
import { CreateProfile } from 'src/dto/create.profile.dto';
import { DeleteProfile } from 'src/dto/delete.profile.dto';

// CRUD - Profile
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
=======
import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import createProfileDto from '../module/dto/createProfile.dto';
import { profileService } from '../services/profile.service'; 

>>>>>>> dev-typeORM:backend/src/controller/profile.controller.ts

@Controller('profile')
export class profileController {
  constructor(private readonly profileService: profileService) {}

  // get all todos
  @Get()
  getProfile() {
    return this.profileService.getAllProfiles();
  }

  // get todo by id
  @Get(':id')
  getProfileById(@Param('id') id: number) {
    return this.profileService.getProfileById(Number(id));
  }

  // create todo
  @Post()
  async createProfile(@Body() profile: createProfileDto) {
    return this.profileService.createProfile(profile);
  }


  //delete todo
  @Delete(':id')
  async deleteprofile(@Param('id') id: string) {
    this.profileService.deleteprofile(Number(id));
  }
}