import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { DatabaseModule } from 'src/common/database/databse.module';
import { PermissionProvider } from './permission.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PermissionsController],
  providers: [PermissionsService, ...PermissionProvider],
})
export class PermissionsModule {}
