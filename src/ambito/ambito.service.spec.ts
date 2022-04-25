import { Test, TestingModule } from '@nestjs/testing';
import { AmbitoService } from './ambito.service';

describe('AmbitoService', () => {
  let service: AmbitoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmbitoService],
    }).compile();

    service = module.get<AmbitoService>(AmbitoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
