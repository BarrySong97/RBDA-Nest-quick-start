import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { RoleProvider } from './role.provider';
import { DatabaseModule } from 'src/common/database/databse.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RolesController],
  providers: [RolesService, ...RoleProvider],
})
export class RolesModule {}
