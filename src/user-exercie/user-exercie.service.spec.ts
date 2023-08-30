import { Test, TestingModule } from '@nestjs/testing';
import { UserExercieService } from './user-exercie.service';

describe('UserExercieService', () => {
  let service: UserExercieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserExercieService],
    }).compile();

    service = module.get<UserExercieService>(UserExercieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
