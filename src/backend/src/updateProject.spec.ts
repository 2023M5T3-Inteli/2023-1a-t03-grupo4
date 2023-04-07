// Importa os módulos necessários
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Project } from './module/entity/project.entity'
import { ProjectService } from './services/project.service';
import { projectController } from './controller/project.controller';

// Cria um mock da entidade
const mockProject = {
  idProject: 1,
  title: "mateus nao mexa mais no meu banco",
  description: "pipipipopopo",
  stt: "disponível",
  submission_date: null,
  date_initial: null,
  date_end: null,
  creator: {
    id_profile: 1,
    name: '',
    email: '',
    skills: null,
    technologies:null,
    manager:null,
    team: null
  },
  area: "dev",
  role: "backend",
  auth: true,
  positions: null,
  skills: null,
  technologies: null,
};

// Cria um mock do DTO (Data Transfer Object) utilizado na chamada PUT
const mockUpdateProjectDto = {
  idProject: 1,
  title: "gabriel nao mexa mais no meu banco",
  description: "pipipipopopo",
  stt: "disponível",
  submission_date: null,
  date_initial: null,
  date_end: null,
  creator: {
    id_profile: 1,
    name: '',
    email: '',
    skills: null,
    technologies:null,
    manager:null,
    team: null
  },
  area: "dev",
  role: "backend",
  auth: true,
  positions: null,
  skills: null,
  technologies: null,
};

// Cria um mock do repositório
class MockRepository {
  async findOne(id: number): Promise<Project> {
    return mockProject;
  }

  async save(entity: any): Promise<Project> {
    return mockProject;
  }
}

describe('projectController', () => {
  let controller: projectController;
  let service: ProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [projectController],
      providers: [
        ProjectService,
        {
          provide: getRepositoryToken(Project),
          useClass: MockRepository,
        },
      ],
    }).compile();

    controller = module.get<projectController>(projectController);
    service = module.get<ProjectService>(ProjectService);
  });

  describe('updateProject', () => {
    it('should return a Project object with updated properties', async () => {
      jest.spyOn(service, 'updateProject').mockResolvedValue(mockProject);

      const result = await controller.updateProject("gabriel não mexa mais no meu banco", mockUpdateProjectDto);

      expect(result).toEqual(mockProject);
      expect(result.title).toEqual(mockUpdateProjectDto.title);
    });
  });
});
