import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateProfile from '../module/dto/createProfile.dto';
import { Profile } from '../module/entities/profile.entity';

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
  async getProfileById(id: number) {
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

  // // update
  // async updateTodo(id: number, post: UpdateTodoDto) {
  //   await this.todoRepository.update(id, post);
  //   const updatedTodo = await this.todoRepository.findOne(id);
  //   if (updatedTodo) {
  //     return updatedTodo;
  //   }

  //   throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
  // }

  // // delete
  // async deleteTodo(id: number) {
  //   const deletedTodo = await this.todoRepository.delete(id);
  //   if (!deletedTodo.affected) {
  //     throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
  //   }
  // }
}