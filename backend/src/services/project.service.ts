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

  // delete
  async deleteProject(id: number) {
    const deleteProject = await this.projectRepository.delete(id);
    if (!deleteProject.affected) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }
  }
}