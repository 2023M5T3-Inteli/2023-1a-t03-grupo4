// Description: requests structure

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Profile } from '@prisma/client';

@Injectable()
export class ProfilesRepository {
  constructor(private prisma: PrismaService) {}

  async createProfile(params: { data: Prisma.ProfileCreateInput }): Promise<Profile> {
    const { data } = params;
    return this.prisma.profile.create({ data });
  }

  async getProfiles(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProfileWhereUniqueInput;
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput;
  }): Promise<Profile[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.profile.findMany({ skip, take, cursor, where, orderBy });
  }

  async updateProfile(params: {
    where: Prisma.ProfileWhereUniqueInput;
    data: Prisma.ProfileUpdateInput;
  }): Promise<Profile> {
    const { where, data } = params;
    return this.prisma.profile.update({ where, data });
  }

  async deleteProfile(params: {
    where: Prisma.ProfileWhereUniqueInput;
  }): Promise<Profile> {
    const { where } = params;
    return this.prisma.profile.delete({ where });
  }
}