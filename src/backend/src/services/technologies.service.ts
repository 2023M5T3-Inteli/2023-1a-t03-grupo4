import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateTechnologies from '../module/dto/createTechnologies.dto';
import { Technologies } from '../module/entity/technologies.entity';

@Injectable()
export class technologiesService {
  constructor(
    @InjectRepository(Technologies) private technologieRepository: Repository<Technologies>,
  ) {}

  // find all
  getAllTechnologies() {
    return this.technologieRepository.find();
  }

  // find by id
  async getTechnologiesById(id: number) {
    const Technologie = await this.technologieRepository.findOneById(id);
    if (Technologie) {
      return Technologie;
    }

    throw new HttpException('Technologie not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createTechnologie(Technologie: CreateTechnologies) {
    const newTechnologie = await this.technologieRepository.create(Technologie);
    await this.technologieRepository.save(newTechnologie);

    return newTechnologie;
  }

  // delete
  async deleteTechnologie(id: number) {
    const deleteTechnologie = await this.technologieRepository.delete(id);
    if (!deleteTechnologie.affected) {
      throw new HttpException('Technologie not found', HttpStatus.NOT_FOUND);
    }
  }
}