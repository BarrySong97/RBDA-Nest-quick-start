import { Module } from '@nestjs/common';
import { PermissionMenuService } from './permission-menu.service';
import { PermissionMenuController } from './permission-menu.controller';
import { PermissionMenuProvider } from './permission-menu.provider';
import { DatabaseModule } from 'src/common/database/databse.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PermissionMenuController],
  providers: [PermissionMenuService, ...PermissionMenuProvider],
})
export class PermissionMenuModule {}
