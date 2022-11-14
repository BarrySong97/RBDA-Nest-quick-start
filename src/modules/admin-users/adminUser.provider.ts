import { DataSource } from 'typeorm';
import { Role } from '../roles/entities/role.entity';
import { AdminUser } from './entities/admin-user.entity';

export const AdminUserProvider = [
  {
    provide: 'ADMIN_USER_REPOSITORY',
    useFactory: (AppDataSource: DataSource) =>
      AppDataSource.getRepository(AdminUser),
    inject: ['MYSQL_DATA_SOURCE'],
  },
  {
    provide: 'ROLE_REPOSITORY',
    useFactory: (AppDataSource: DataSource) =>
      AppDataSource.getTreeRepository(Role),
    inject: ['MYSQL_DATA_SOURCE'],
  },
];
