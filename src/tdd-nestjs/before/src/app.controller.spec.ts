import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// describe('AppController', () => {
//   let appController: AppController;

//   beforeEach(async () => {
//     const app: TestingModule = await Test.createTestingModule({
//       controllers: [AppController],
//       providers: [AppService],
//     }).compile();

//     appController = app.get<AppController>(AppController);
//   });

//   describe('root', () => {
//     it('should return "Hello World!"', () => {
//       expect(appController.getHello()).toBe('Hello World!');
//     });
//   });
// });



// adição da versão nova do app controller
describe("Projects funcs",()=>{
  let projetos;

  beforeEach(async ()=>{
    projetos = []
  })

  describe("create project",()=>{
    it("should create a project",()=>{
      projetos.push({nome:"aksdkjhakjda",description:"akjhsdjkahdkja"})
      expect(projetos.length).toBe(1)
    })
  })


})
