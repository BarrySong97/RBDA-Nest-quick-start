import { DataSource } from 'typeorm';
import { AdminUser } from './entities/admin-user.entity';

export const AdminUserProvider = [
  {
    provide: 'ADMIN_USER_REPOSITORY',
    useFactory: (AppDataSource: DataSource) =>
      AppDataSource.getRepository(AdminUser),
    inject: ['MYSQL_DATA_SOURCE'],
  },
];
