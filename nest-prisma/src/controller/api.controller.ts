import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectsService } from 'src/service/projects.service';

@Controller('api')
export class ApiController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post(`project`)
  async createProject(@Body() data: { idProject: number, title: string; description: string, stt: string, submission_date: Date, period: Date, specification: string, area: string, role: string, auth: boolean, creator: string }) {
    const { idProject, title, description, submission_date, period, specification, area, role, auth, creator} = data;
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
}

