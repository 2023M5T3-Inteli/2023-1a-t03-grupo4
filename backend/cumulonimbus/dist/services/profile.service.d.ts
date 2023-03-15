import { Repository } from 'typeorm';
import CreateProfile from '../module/dto/createProfile.dto';
import { Profile } from '../module/entities/profile.entity';
export declare class profileService {
    private profileRepository;
    constructor(profileRepository: Repository<Profile>);
    getAllTodos(): Promise<Profile[]>;
    getTodoById(id: number): Promise<Profile>;
    createProfile(profile: CreateProfile): Promise<Profile>;
}
