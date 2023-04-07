import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import CreateSkills from '../module/dto/createSkills.dto';
import { SkillsService } from '../services/skills.service';
import { ApiTags } from "@nestjs/swagger";

@Controller('skills')
@ApiTags('Skills')
export class skillsController {
  constructor(private readonly skillsService: SkillsService) {}

  // Get all the projects
  @Get()
  getProject() {
    return this.skillsService.getAllSkills();
  }

  // Get a project by id
  @Get(':id')
  getSkillById(@Param('id') id: number) {
    return this.skillsService.getSkillById(Number(id));
  }

  // Create a project
  @Post()
  async createSkill(@Body() skill: CreateSkills) {
    return this.skillsService.createSkill(skill);
  }

  //Delete a project
  @Delete(':id')
  async deleteSkill(@Param('id') id: number) {
    this.skillsService.deleteSkill(Number(id));
  }
}