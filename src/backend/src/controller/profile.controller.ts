import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import createProfileDto from '../module/dto/createProfile.dto';
import { profileService } from '../services/profile.service'; 
import { ApiTags } from "@nestjs/swagger";

@Controller('profile')
@ApiTags('Profile')
export class profileController {
  constructor(private readonly profileService: profileService) {}

  // get all todos
  @Get()
  getProfile() {
    return this.profileService.getAllProfiles();
  }

  // get todo by id
  @Get(':id')
  getProfileById(@Param('id') id: string) {
    return this.profileService.getProfileById(id);
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

  @Get(':name/id')
  async findUserIdByUsername(@Param('name') name: string){
    return this.profileService.findUserIdByUsername(name);
  }

}