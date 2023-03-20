import CreateProject from '../module/dto/createProject.dto';
import { ProjectService } from '../services/project.service';
export declare class projectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    getProject(): Promise<import("../module/entity/project.entity").Project[]>;
    getProjectById(id: number): Promise<import("../module/entity/project.entity").Project>;
    createProject(project: CreateProject): Promise<import("../module/entity/project.entity").Project>;
}
