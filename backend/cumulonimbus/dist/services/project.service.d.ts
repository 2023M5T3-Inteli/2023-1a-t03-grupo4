import { Repository } from 'typeorm';
import CreateProject from 'src/module/dto/createProject.dto';
import { Project } from 'src/module/entities/project.entity';
export declare class ProjectService {
    private projectRepository;
    constructor(projectRepository: Repository<Project>);
    getAllProjects(): Promise<Project[]>;
    getProjectById(idProject: number): Promise<Project>;
    createProject(project: CreateProject): Promise<Project>;
}
