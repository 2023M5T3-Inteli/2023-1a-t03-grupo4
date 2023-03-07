import { Injectable } from '@nestjs/common';
import { Project, Profile } from '@prisma/client';
import { ProjectsRepository } from 'src/modules/projects/projects.repository';

@Injectable()
export class ProjectsService {
    constructor(private repository: ProjectsRepository) { }

    async createProject(params: { idProject: Project[`idProject`], title: Project[`title`]; description: Project[`description`], submission_date: Project[`submission_date`], period: Project[`period`], specification: Project[`specification`], area: Project[`area`], role: Project[`role`], auth: Project[`auth`], creator: Profile[`email`] }) {
        const { idProject, title, description, submission_date, period, specification, area, role, auth, creator } = params;

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
                creator
            },
        });
        
        return project;
    }

    async getProject() {
        const project = await this.repository.getProjects({});
        return project;
    }

    async remove(id: number) {
        return this.prisma.article.delete({ where: { id } });
      }
    
}
