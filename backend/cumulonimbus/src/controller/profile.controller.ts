import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import createProfileDto from '../module/dto/createProfile.dto';
import { profileService } from '../services/profile.service'; 
import updateProfileDto from '../module/dto/updateProfile.dto';

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

//   // update todo
//   @Put(':id')
//   async updateProject(@Param('id') id:number, @Body() updateProjectDto: UpdateProjectDto) {
//     return this.projectService.updateProject(Number(id), updateProjectDto);
//   }

//   //delete todo
//   @Delete(':id')
//   async deleteTodo(@Param('id') id: string) {
//     this.todosService.deleteTodo(Number(id));
//   }
}