import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Submission } from '@prisma/client';

@Injectable()
export class SubmissionRepository {
  constructor(private prisma: PrismaService) {}

  async createSubmission(params: { data: Prisma.SubmissionCreateInput }): Promise<Submission> {
    const { data } = params;
    return this.prisma.submission.create({ data });
  }

  async getSubmission(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SubmissionWhereUniqueInput;
    where?: Prisma.SubmissionWhereInput;
    orderBy?: Prisma.SubmissionOrderByWithRelationInput;
  }): Promise<Submission[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.submission.findMany({ skip, take, cursor, where, orderBy });
  }

  async updateSubmission(params: {
    where: Prisma.SubmissionWhereUniqueInput;
    data: Prisma.SubmissionUpdateInput;
  }): Promise<Submission> {
    const { where, data } = params;
    return this.prisma.submission.update({ where, data });
  }

  async deleteSubmission(params: {
    where: Prisma.SubmissionWhereUniqueInput;
  }): Promise<Submission> {
    const { where } = params;
    return this.prisma.submission.delete({ where });
  }
}