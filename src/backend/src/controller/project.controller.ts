import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/wt-auth.guard';
import CreateProject from '../module/dto/createProject.dto';
import { ProjectService } from '../services/project.service';

@Controller('project')
export class projectController {
  constructor(private readonly projectService: ProjectService) {}

  // Get all the projects
  @UseGuards(JwtAuthGuard)
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
    return this.projectService.createProject(project);
  }

  //Delete a project
  @Delete(':id')
  async deleteProject(@Param('id') id: number) {
    this.projectService.deleteProject(Number(id));
  }
}