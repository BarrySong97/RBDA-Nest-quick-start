import { Module } from '@nestjs/common';
import { PermissionMenuService } from './permission-menu.service';
import { PermissionMenuController } from './permission-menu.controller';

@Module({
  controllers: [PermissionMenuController],
  providers: [PermissionMenuService]
})
export class PermissionMenuModule {}
