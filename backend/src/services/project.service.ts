import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateProject from '../module/dto/createProject.dto';
import { Project } from '../module/entity/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) {}

  // find all
  getAllProjects() {
    return this.projectRepository.find();
  }

  // find by id_project
  async getProjectById(idProject: number) {
    const project = await this.projectRepository.findOneById(idProject);
    if (project) {
      return project;
    }

    throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createProject(project: CreateProject) {
    const newProject = await this.projectRepository.create(project);
    await this.projectRepository.save(newProject);

    return newProject;
  }

//   // update
//   async updateProject(id: number, post: UpdateProjectDto) {
//     await this.projectRepository.update(id, post);
//     const updatedTodo = await this.projectRepository.findOne(id);
//     if (updatedProject) {
//       return updatedProject;
//     }

//     throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
//   }

//   // delete
//   async deleteTodo(id: number) {
//     const deletedTodo = await this.todoRepository.delete(id);
//     if (!deletedTodo.affected) {
//       throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
//     }
//   }
}