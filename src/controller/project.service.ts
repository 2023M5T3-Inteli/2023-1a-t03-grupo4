import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Project, Prisma } from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async Project(
    ProjectWhereUniqueInput: Prisma.ProjectWhereUniqueInput,
  ): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: ProjectWhereUniqueInput,
    });
  }

  async Projects(params: {
    idProject: number
    title?: string
    description?: string
    stt?: string
    submission_date?: number
    period?: number
    specification?: string
    team?: string
    area?: string
    role?: string
    auth?: boolean
    creator?: string
    cursor?: Prisma.ProjectWhereUniqueInput;
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput;
  }): Promise<Project[]> {
    const { idProject, title, description, stt, submission_date, period,
        specification, team, area, role, auth, creator, cursor, where, orderBy } = params;
    return this.prisma.project.findMany({
        idProject,
        title, 
        description, 
        stt, 
        submission_date, 
        period,
        specification, 
        team, 
        area, 
        role, 
        auth, 
        creator,
      cursor,
      where,
      orderBy,
    });
  }

  async createProject(data: Prisma.ProjectCreateInput): Promise<Project> {
    return this.prisma.project.create({
      data,
    });
  }

  async updateProject(params: {
    where: Prisma.ProjectWhereUniqueInput;
    data: Prisma.ProjectUpdateInput;
  }): Promise<Project> {
    const { where, data } = params;
    return this.prisma.project.update({
      data,
      where,
    });
  }

  async deleteProject(where: Prisma.ProjectWhereUniqueInput): Promise<Project> {
    return this.prisma.project.delete({
      where,
    });
  }
}