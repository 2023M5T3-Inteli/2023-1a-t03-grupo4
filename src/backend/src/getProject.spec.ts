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

// Cria um mock do repositório
class ProjectRepository {
  async findOne(idProject: number): Promise<Project> {
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
          useClass: ProjectRepository,
        },
      ],
    }).compile();

    controller = module.get<projectController>(projectController);
    service = module.get<ProjectService>(ProjectService);
  });

  describe('getProject', () => {
    it('should return a Project object', async () => {
      jest.spyOn(service, 'getProjectById').mockResolvedValue(mockProject);

      const result = await controller.getProjectById(1);

      expect(result).toBe(mockProject);
    });
  });
});
