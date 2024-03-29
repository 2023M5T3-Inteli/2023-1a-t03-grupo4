import { Body, Controller, Delete, Get, Param, Post, UseGuards, Patch} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/wt-auth.guard';
import CreateProject from '../module/dto/createProject.dto';
import UpdateProjectDto from '../module/dto/updateProject.dto';
import { ProjectService } from '../services/project.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";

@Controller('project')
@ApiTags('Project')
export class projectController {
  constructor(private readonly projectService: ProjectService) {}

  // Get all the projects
  //@UseGuards(JwtAuthGuard)
  @Get()
  getProject() {
    return this.projectService.getAllProjects();
  }

  // Get a project by id
  @Get(':id')
  getProjectById(@Param('id') id: number) {
    return this.projectService.getProjectById(Number(id));
  }

  // Create a project
  @Post()
  async createProject(@Body() project: CreateProject) {
    console.log(project)
    return this.projectService.createProject(project);
  }

  //Delete a project
  @Delete(':id')
  async deleteProject(@Param('id') id: number) {
    this.projectService.deleteProject(Number(id));
  }

  // update a project
  @Patch(':id')
  async updateProject(@Param('id') id: string, @Body() project: UpdateProjectDto) {
    return this.projectService.updateProject(Number(id), project);
  }

  // Get a project by creator
  @Get('creator/:id')
  getProjectByCreator(@Param('id') id: string) {
    return this.projectService.getProjectByCreator(id);
  }
}