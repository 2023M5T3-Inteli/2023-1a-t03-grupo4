import { PrismaService } from './prisma.service';
import { Project, Prisma } from '@prisma/client';
export declare class ProjectService {
    private prisma;
    constructor(prisma: PrismaService);
    Project(ProjectWhereUniqueInput: Prisma.ProjectWhereUniqueInput): Promise<Project | null>;
    Projects(params: {
        idProject: number;
        title?: string;
        description?: string;
        stt?: string;
        submission_date?: number;
        period?: number;
        specification?: string;
        team?: string;
        area?: string;
        role?: string;
        auth?: boolean;
        creator?: string;
        cursor?: Prisma.ProjectWhereUniqueInput;
        where?: Prisma.ProjectWhereInput;
        orderBy?: Prisma.ProjectOrderByWithRelationInput;
    }): Promise<Project[]>;
    createProject(data: Prisma.ProjectCreateInput): Promise<Project>;
    updateProject(params: {
        where: Prisma.ProjectWhereUniqueInput;
        data: Prisma.ProjectUpdateInput;
    }): Promise<Project>;
    deleteProject(where: Prisma.ProjectWhereUniqueInput): Promise<Project>;
}
