import { Body, Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { SubmissionsService } from 'src/service/submissions.service';

@Controller('submission')
export class ProfileController {
  constructor(private readonly profilesService: SubmissionsService) {}

  @Post(`submission`)
  async createSubmission(@Body() data: { id_submission: number, name: string, id_project: number; reason: string, email: string, status: string}) {
    const { id_submission, name, id_project, reason,  email, status} = data;
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
  async deleteSubmission(@Body() data: {id_submission:number}) {
    const id_submission = data;
    return this.profilesService.deleteSubmission(id_submission);
  }

}

