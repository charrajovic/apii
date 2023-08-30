import { Test, TestingModule } from '@nestjs/testing';
import { UserdietService } from './userdiet.service';

describe('UserdietService', () => {
  let service: UserdietService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserdietService],
    }).compile();

    service = module.get<UserdietService>(UserdietService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
