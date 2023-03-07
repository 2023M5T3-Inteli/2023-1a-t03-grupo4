import { Module } from '@nestjs/common';
import { ProjectsModule } from './modules/projects/projects.module';
import { ApiModule } from './api/api.module';


@Module({
  imports: [ProjectsModule, ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
