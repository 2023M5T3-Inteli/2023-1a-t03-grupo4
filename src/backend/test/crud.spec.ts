import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { ProjectsModule } from 'src/modules/projects/projects.module';

describe('ApiController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ProjectsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('CRUD endpoints', () => {
    let createdItemId: string;

    it('should create a new project', () => {
      return request(app.getHttpServer())
        .post('/project')
        .send({
          titulo: 'Teste de criação',
          idProject: 1,
          title: 'string',
          description: 'string',
          submission_date: '2022-01-01',
          period: '2022-01-01',
          specification: 'string',
          area: 'string',
          role: 'string',
          auth: 1,
          creator: 1,
          data: '2023-03-13T16:02:02',
        })
        .expect(HttpStatus.CREATED)
        .then((response) => {
          createdItemId = response.body.id;
        });
    });

    it('should retrieve the created item', () => {
      return request(app.getHttpServer())
        .get(`/project/${createdItemId}`)
        .expect(HttpStatus.OK)
        .expect((response) => {
          expect(response.body.name).toEqual('Item 1');
          expect(response.body.description).toEqual('Description of Item 1');
        });
    });

    it('should delete the created item', () => {
      return request(app.getHttpServer())
        .delete(`/project/${createdItemId}`)
        .expect(HttpStatus.OK);
    });
  });
});
