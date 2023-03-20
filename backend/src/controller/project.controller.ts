import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import CreateProject from '../module/dto/createProject.dto';
import { ProjectService } from '../services/project.service';
import UpdateProjectDto from '../module/dto/updateProject.dto';

@Controller('project')
export class projectController {
  constructor(private readonly projectService: ProjectService) {}

  // get all todos
  @Get()
  getProject() {
    return this.projectService.getAllProjects();
  }

  // get todo by id
  @Get(':id')
  getProjectById(@Param('id') id: number) {
    return this.projectService.getProjectById(Number(id));
  }

  // create todo
  @Post()
  async createProject(@Body() project: CreateProject) {
    return this.projectService.createProject(project);
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