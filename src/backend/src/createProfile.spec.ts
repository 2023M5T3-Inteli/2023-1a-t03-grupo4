// Importa os módulos necessários
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Profile } from './module/entity/profile.entity'
import { profileService } from './services/profile.service';
import { profileController } from './controller/profile.controller';

// Cria um mock da entidade
const mockProfile = {
    id_profile: 1,
    name: 'gabriel',
    email: 'gabrieltorres',
    skills: null,
    technologies:null,
    manager:null,
    team: null
}

// Cria um mock do DTO (Data Transfer Object) utilizado na chamada POST
const mockCreateProfileDto = {
  idProfile: 1,
  name: 'Test Entity',
  email: 'gabrieltorres',
  skills: null,
  technologies:null,
  manager:null,
  team: null
};

// Cria um mock do repositório
class MockRepository {
  async create(data: any): Promise<Profile> {
    return mockProfile;
  }
}

describe('MyEntityController', () => {
  let controller: profileController;
  let service: profileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [profileController],
      providers: [
        profileService,
        {
          provide: getRepositoryToken(Profile),
          useClass: MockRepository,
        },
      ],
    }).compile();

    controller = module.get<profileController>(profileController);
    service = module.get<profileService>(profileService);
  });

  describe('createProfile', () => {
    it('should return a Profile object', async () => {
      jest.spyOn(service, 'createProfile').mockResolvedValue(mockProfile);

      const result = await controller.createProfile(mockCreateProfileDto);

      expect(result).toBe(mockProfile);
    });
  });
});
