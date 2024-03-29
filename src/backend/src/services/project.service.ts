//@ts-nocheck

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateProject from '../module/dto/createProject.dto';
import {UpdateProjectDto} from '../module/dto/updateProject.dto';
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
      project.date_initial = new Date(project.date_initial).toLocaleDateString();
      project.date_end = new Date(project.date_end).toLocaleDateString();
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

  //Update a project  
  async updateProject(id, project: UpdateProjectDto) {
    await this.projectRepository.update(id, project);
    const updatedProject = await this.projectRepository.findOne({where:id});
    if (updatedProject) {
      return updatedProject;
    }
  
   throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
  }

  async getProjectByCreator(Creator: string) {
    const project = await this.projectRepository.find({where:{creator:{id_profile:Creator}}});
    if (project) {
      return project;
    }

    throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
  }
}