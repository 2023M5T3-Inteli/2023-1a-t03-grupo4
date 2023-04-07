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
};

// Cria um mock do repositório
class ProfileRepository {
  async findOne(id_profile: number): Promise<Profile> {
    return mockProfile;
  }
}

describe('profileController', () => {
  let controller: profileController;
  let service: profileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [profileController],
      providers: [
        profileService,
        {
          provide: getRepositoryToken(Profile),
          useClass: ProfileRepository,
        },
      ],
    }).compile();

    controller = module.get<profileController>(profileController);
    service = module.get<profileService>(profileService);
  });

  describe('getProject', () => {
    it('should return a Profile object', async () => {
      jest.spyOn(service, 'getProfileById').mockResolvedValue(mockProfile);

      const result = await controller.getProfileById(1);

      expect(result).toBe(mockProfile);
    });
  });
});
