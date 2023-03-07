import { Module } from '@nestjs/common';
import { ProjectsModule } from 'src/modules/projects/projects.module';
import { ApiController } from 'src/controller/api.controller';

@Module({
    imports: [ProjectsModule],
    controllers: [ApiController],
  })
  export class ApiModule {}