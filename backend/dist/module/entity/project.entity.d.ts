import { Profile } from './profile.entity';
export declare class Project {
    idProject: number;
    title: string;
    description: string;
    stt: string;
    submission_date: Date;
    date_initial: Date;
    date_end: Date;
    creator: Profile;
    area: string;
    role: string;
    auth: boolean;
}
export default Project;
