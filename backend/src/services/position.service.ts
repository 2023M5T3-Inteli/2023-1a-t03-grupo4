import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import createPosition from '../module/dto/createPosition';
import {Positions} from '../module/entity/positions.entity';

@Injectable()
export class PositionsService {
  constructor(
    @InjectRepository(Positions) private PositionsRepository: Repository<Positions>,
  ) {}

  // find all
  getAllPositionss() {
    return this.PositionsRepository.find();
  }

  // find by id
  async getPositionsById(id: number) {
    const Positions = await this.PositionsRepository.findOneById(id);
    if (Positions) {
      return Positions;
    }

    throw new HttpException('Positions not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createPositions(Positions: createPosition) {
    const newPositions = await this.PositionsRepository.create(Positions);
    await this.PositionsRepository.save(newPositions);

    return newPositions;
  }

  // delete
  async deletePositions(id: number) {
    const deletePositions = await this.PositionsRepository.delete(id);
    if (!deletePositions.affected) {
      throw new HttpException('Positions not found', HttpStatus.NOT_FOUND);
    }
  }
}