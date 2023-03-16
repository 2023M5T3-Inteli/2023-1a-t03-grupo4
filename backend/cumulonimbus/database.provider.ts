import { DataSource } from 'typeorm';
import { Project } from './src/module/entities/project.entity'
import {Profile} from './src/module/entities/profile.entity'

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'grupo4-dev.cd53msdn47fe.us-east-1.rds.amazonaws.com',
        port: 5432,
        username: 'postgres',
        password: 'grupo4123',
        database: 'postgres',
        entities: [Project, Profile],
        schema: 'public',
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];