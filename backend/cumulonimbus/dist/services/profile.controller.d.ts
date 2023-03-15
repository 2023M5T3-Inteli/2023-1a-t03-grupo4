import { Repository } from 'typeorm';
import { createProfileDto } from '../module/dto/createProfile.dto';
import { Profile } from '../module/entities/profile.entity';
export declare class profileService {
    private profileRepository;
    constructor(profileRepository: Repository<Profile>);
    getAllTodos(): Promise<Profile[]>;
    getProfileById(id: any): Promise<Profile>;
    createProfile(profile: createProfileDto): Promise<Profile>;
}
