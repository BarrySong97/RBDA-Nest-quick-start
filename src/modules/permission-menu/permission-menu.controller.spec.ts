import { Test, TestingModule } from '@nestjs/testing';
import { PermissionMenuController } from './permission-menu.controller';
import { PermissionMenuService } from './permission-menu.service';

describe('PermissionMenuController', () => {
  let controller: PermissionMenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermissionMenuController],
      providers: [PermissionMenuService],
    }).compile();

    controller = module.get<PermissionMenuController>(PermissionMenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
