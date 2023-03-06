import { Injectable } from '@nestjs/common';
import { Project, Profile } from '@prisma/client';
import { ProjectsRepository } from 'src/modules/projects/projects.repository';

@Injectable()
export class ProjectsService {
  constructor(private repository: ProjectsRepository) {}

    async createProject(params: { idProject: Project[`idProject`], title: Project[`title`]; description: Project[`description`], submission_date: Project[`submission_date`], period: Project[`period`], specification: Project[`specification`], area:Project[`area`], role: Project[`role`], auth:Project[`auth`], creator:Profile[`email`] }) {
        const { idProject, title, description, submission_date, period, specification, area, role, auth, creator } = params;

        // call repository layer
        const project = await this.repository.createProject({
        data: {
            title,
            description,
            submission_date,    
            period,
            specification,
            area,
            role,
            auth,
            creator:{
                connect:{
                    email: ""
                }
            }
            },
        });

        // do other things in the service layer... e.g. send email of tweet

        return project;
    }

    async getProject() {
        const tweets = await this.repository.getProjects({});
        return tweets;
    }
}
