import { Test, TestingModule } from '@nestjs/testing';
import { CanalesController } from './canales.controller';

describe('CanalesController', () => {
  let controller: CanalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CanalesController],
    }).compile();

    controller = module.get<CanalesController>(CanalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
