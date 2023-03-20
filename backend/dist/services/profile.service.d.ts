import { Repository } from 'typeorm';
import CreateProfile from '../module/dto/createProfile.dto';
import { Profile } from '../module/entity/profile.entity';
export declare class profileService {
    private profileRepository;
    constructor(profileRepository: Repository<Profile>);
    getAllProfiles(): Promise<Profile[]>;
    getProfileById(id: number): Promise<Profile>;
    createProfile(profile: CreateProfile): Promise<Profile>;
}
