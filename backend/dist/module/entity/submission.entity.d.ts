import { Project } from './project.entity';
export declare class Submission {
    idSubmission: number;
    name: string;
    idProject: Project["idProject"];
    reason: string;
    email: string;
    stt: string;
}
