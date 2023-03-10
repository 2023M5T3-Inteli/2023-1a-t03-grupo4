import { Body, Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SubmissionsService } from 'src/service/submissions.service';
import { CreateSubmission } from 'src/dto/create.submission.dto';
import { DeleteSubmission } from 'src/dto/delete.submission.dto';

@ApiTags('Submission')
@Controller('submission')
export class SubmissionController {
  constructor(private readonly profilesService: SubmissionsService) {}

  @Post(`submission`)
  async createSubmission(@Body() createSubmission:CreateSubmission) {
    const { id_submission, name, id_project, reason,  email, status} = createSubmission;
    return this.profilesService.createSubmission({
        id_submission,
        name,
        id_project,
        reason,
        email,
        status
    });
  }

  @Get('submission')
  getSubmission() {
    return this.profilesService.getSubmission();
  }

  @Delete(`submission`)
  async deleteSubmission(@Body() deleteSubmission:DeleteSubmission) {
    const id_submission = deleteSubmission;
    return this.profilesService.deleteSubmission(id_submission);
  }

}

