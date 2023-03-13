import { Module } from '@nestjs/common';
import { ProfilesRepository } from './profile.repository';
import { PrismaModule } from 'src/prisma.module';
import { ProfilesService } from 'src/service/profiles.service';

// Roots API
@Module({
  imports: [PrismaModule],
  providers: [ProfilesRepository, ProfilesService],
  exports: [ProfilesService],
})
export class ProfilesModule {}
