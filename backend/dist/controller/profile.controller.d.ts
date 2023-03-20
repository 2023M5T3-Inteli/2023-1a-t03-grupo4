import createProfileDto from '../module/dto/createProfile.dto';
import { profileService } from '../services/profile.service';
export declare class profileController {
    private readonly profileService;
    constructor(profileService: profileService);
    getProfile(): Promise<import("../module/entity/profile.entity").Profile[]>;
    getProfileById(id: number): Promise<import("../module/entity/profile.entity").Profile>;
    createProfile(profile: createProfileDto): Promise<import("../module/entity/profile.entity").Profile>;
}
