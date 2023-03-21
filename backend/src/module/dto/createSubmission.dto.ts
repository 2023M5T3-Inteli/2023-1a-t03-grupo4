import {Project} from '../entity/project.entity';
import {Profile} from '../entity/profile.entity';
import { Positions } from '../entity/positions.entity';

export class CreateSubmissionDto {
    idSubmission: number;
    name: string;
    id_profile: Profile;
    idproject: Project;
    reason: string;
    email: string;
    stt: string;
    position: Positions;

}

export default CreateSubmissionDto;