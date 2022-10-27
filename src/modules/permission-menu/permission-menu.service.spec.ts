import { Test, TestingModule } from '@nestjs/testing';
import { PermissionMenuService } from './permission-menu.service';

describe('PermissionMenuService', () => {
  let service: PermissionMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermissionMenuService],
    }).compile();

    service = module.get<PermissionMenuService>(PermissionMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
