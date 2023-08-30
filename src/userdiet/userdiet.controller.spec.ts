import { Test, TestingModule } from '@nestjs/testing';
import { UserdietController } from './userdiet.controller';

describe('UserdietController', () => {
  let controller: UserdietController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserdietController],
    }).compile();

    controller = module.get<UserdietController>(UserdietController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
