import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateProfile from '../module/dto/createProfile.dto';
import { Profile } from '../module/entity/profile.entity';

@Injectable()
export class profileService {
  constructor(
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  // find all
  getAllProfiles() {
    return this.profileRepository.find();
  }

  // find by id
  async getProfileById(id: string) {
    const profile = await this.profileRepository.findOneById(id);
    if (profile) {
      return profile;
    }

    throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createProfile(profile: CreateProfile) {
    const newProfile = await this.profileRepository.create(profile);
    await this.profileRepository.save(newProfile);

    return newProfile;
  }

  // delete
  async deleteprofile(id: number) {
    const deleteProfile = await this.profileRepository.delete(id);
    if (!deleteProfile.affected) {
      throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
    }
  }

  async findUserIdByUsername(name: string){
    const user = await this.profileRepository.findOneBy({name:name});
    if (user){
      return user;
    }

    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }


}