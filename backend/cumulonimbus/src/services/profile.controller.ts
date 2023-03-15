import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {createProfileDto} from '../module/dto/createProfile.dto';
import {updateProfileDto} from '../module/dto/updateProfile.dto';
import {deleteProfileDto} from '../module/dto/deleteProfile.dto';
import { Profile } from '../module/entities/profile.entity';

@Injectable()
export class profileService {
  constructor(
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  // find all
  getAllTodos() {
    return this.profileRepository.find();
  }

  // find by id
  async getProfileById(id) {
    const profile = await this.profileRepository.findOne(id);
    if (profile) {
      return profile;
    }

    throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createProfile(profile: createProfileDto) {
    const newProfile = await this.profileRepository.create(profile);
    await this.profileRepository.save(newProfile);

    return newProfile;
  }

//   // update
//   async updateProfile(id: number, post: UpdateProfile) {
//     await this.profileRepository.update(id, post);
//     const updatedTodo = await this.profileRepository.findOne(id);
//     if (updatedProfile) {
//       return updatedProfile;
//     }

//     throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
//   }

//   // delete
//   async deleteProfile(id: number) {
//     const deletedProfile = await this.profileRepository.delete(id);
//     if (!deletedTodo.affected) {
//       throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
//     }
//   }
}