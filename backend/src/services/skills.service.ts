import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateSkills from '../module/dto/createSkills.dto'
import { Skills } from '../module/entity/skills.entity';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skills) private skillsRepository: Repository<Skills>,
  ) {}

  // find all
  getAllSkills() {
    return this.skillsRepository.find();
  }

  // find by id
  async getSkillById(id: number) {
    const skill = await this.skillsRepository.findOneById(id);
    if (skill) {
      return skill;
    }

    throw new HttpException('Skill not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createSkill(skill: CreateSkills) {
    const newSkill = await this.skillsRepository.create(skill);
    await this.skillsRepository.save(newSkill);

    return newSkill;
  }

  // delete
  async deleteSkill(id: number) {
    const deleteSkill = await this.skillsRepository.delete(id);
    if (!deleteSkill.affected) {
      throw new HttpException('Skill not found', HttpStatus.NOT_FOUND);
    }
  }
}