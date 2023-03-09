import { Injectable } from '@nestjs/common';
import { Project, Submission } from '@prisma/client';
import { SubmissionRepository } from 'src/modules/projects/submission.repository';

@Injectable()
export class SubmissionsService {
    constructor(private repository: SubmissionRepository) { }

    async createSubmission(params: { id_submission: Submission[`id_submission`], name: Submission[`name`], id_project: Submission[`id_project`],  reason: Submission[`reason`], email: Submission[`email`], status: Submission[`status`]}) {
        const { id_submission, name, id_project, reason, email, status } = params;

        const submission = await this.repository.createSubmission({
            data: {
                name,
                reason,
                status
            },
        });
        
        return submission;
    }

    async getSubmission() {
        const submission = await this.repository.getSubmission({});
        return submission;
    }

    async deleteSubmission( id_submission) {
        const deleteSubmission = await this.repository.deleteSubmission({
            where: id_submission,
          })
        return deleteSubmission
    }
}
