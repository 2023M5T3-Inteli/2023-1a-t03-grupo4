/*Description: It handles the incoming HTTP requests and sends the response back to the caller, specifically from the Projects table */

import { Body, Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectsService } from 'src/service/projects.service';
import { CreateProject } from 'src/dto/create.project.dto';
import { DeleteProject } from 'src/dto/delete.project.dto';

// CRUD - Projects
@ApiTags ('Project')
@Controller('api')
export class ApiController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post(`project`)
  async createProject(@Body() creatProject: CreateProject) {
    const {idProject, title, description, submission_date, period, specification, area, role, auth, creator} = creatProject;
    return this.projectsService.createProject({
        idProject,
        title,
        description,
        submission_date,
        period,
        specification,
        area,
        role,
        auth,
        creator
    });
  }

  @Get('project')
  getProject() {
    return this.projectsService.getProject();
  }

  @Delete(`project`)
  async deleteProfile(@Body() deleteProject:DeleteProject) {
    const idProject = deleteProject;
    return this.projectsService.deleteProject(idProject);
  }

}

