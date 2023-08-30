import { Test, TestingModule } from '@nestjs/testing';
import { UserExercieController } from './user-exercie.controller';

describe('UserExercieController', () => {
  let controller: UserExercieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserExercieController],
    }).compile();

    controller = module.get<UserExercieController>(UserExercieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
