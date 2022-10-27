import { Module } from '@nestjs/common';
import { AdminUsersService } from './admin-users.service';
import { AdminUsersController } from './admin-users.controller';
import { DatabaseModule } from 'src/common/database/databse.module';
import { AdminUserProvider } from './adminUser.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [AdminUsersController],
  providers: [AdminUsersService, ...AdminUserProvider],
})
export class AdminUsersModule {}
