<<<<<<< HEAD:src/backend/src/controller/submission.controller.ts
/*Description: It handles the incoming HTTP requests and sends the response back to the caller, specifically from the Submission table */

import { Body, Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SubmissionsService } from 'src/service/submissions.service';
import { CreateSubmission } from 'src/dto/create.submission.dto';
import { DeleteSubmission } from 'src/dto/delete.submission.dto';

// CRUD - Submission
@ApiTags('Submission')
=======
import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import { Submission } from 'src/module/entity/submission.entity';
import CreateSubmission from '../module/dto/createSubmission.dto';
import { submissionService } from '../services/submission.service';

>>>>>>> dev-typeORM:backend/src/controller/submission.controller.ts
@Controller('submission')
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