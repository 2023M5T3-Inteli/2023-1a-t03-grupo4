import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import { Submission } from 'src/module/entity/submission.entity';
import CreateSubmission from '../module/dto/createSubmission.dto';
import { submissionService } from '../services/submission.service';
import { ApiTags } from "@nestjs/swagger";

@Controller('submission')
@ApiTags('Submission')
export class submissionController {
  constructor(private readonly submissionService: submissionService) {}

  // Get all the submissions
  @Get()
  getsubmission() {
    return this.submissionService.getAllSubmission();
  }

  // Get a submission by id
  @Get(':id')
  getsubmissionById(@Param('id') id: number) {
    return this.submissionService.getSubmissionById(Number(id));
  }

  // Create a submission
  @Post()
  async createsubmission(@Body() submission: Submission) {
    return this.submissionService.createSubmission(submission);
  }

  //Delete a submission
  @Delete(':id')
  async deletesubmission(@Param('id') id: number) {
    this.submissionService.deleteSubmission(Number(id));
  }
}