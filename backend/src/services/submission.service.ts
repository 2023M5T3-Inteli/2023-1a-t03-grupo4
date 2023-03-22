import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateSubmissionDto from '../module/dto/createSubmission.dto';
import { Submission } from '../module/entity/submission.entity';

@Injectable()
export class submissionService {
  constructor(
    @InjectRepository(Submission) private submissionRepository: Repository<Submission>,
  ) {}

  // find all
  getAllSubmission() {
    return this.submissionRepository.find();
  }

  // find by id
  async getSubmissionById(id: number) {
    const submission = await this.submissionRepository.findOneById(id);
    if (submission) {
      return submission;
    }

    throw new HttpException('Submission not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createSubmission(submission: Submission) {
    const newSubmission = await this.submissionRepository.create(submission);
    await this.submissionRepository.save(newSubmission);

    return newSubmission;
  }

  // delete
  async deleteSubmission(id: number) {
    const deleteSubmission = await this.submissionRepository.delete(id);
    if (!deleteSubmission.affected) {
      throw new HttpException('Submission not found', HttpStatus.NOT_FOUND);
    }
  }
}