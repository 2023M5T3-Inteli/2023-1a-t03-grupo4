import { Injectable } from '@nestjs/common';
import { Project, Profile } from '@prisma/client';
import { ProfilesRepository } from 'src/modules/projects/profile.repository';

@Injectable()
export class ProfilesService {
    constructor(private repository: ProfilesRepository) { }

    async createProfile(params: { id_profile: Profile[`id_profile`], name: Profile[`name`]; email: Profile[`email`] }) {
        const { id_profile, name, email } = params;

        const profile = await this.repository.createProfile({
            data: {
                name,
                email
            },
        });
        
        return profile;
    }

    async getProfile() {
        const profile = await this.repository.getProfiles({});
        return profile;
    }

    async deleteProfile( idProfile) {
        const deleteProfile = await this.repository.deleteProfile({
            where: idProfile,
          })
        return deleteProfile
    }
}
