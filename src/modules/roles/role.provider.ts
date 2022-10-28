import { DataSource } from 'typeorm';
import { Role } from './entities/role.entity';

export const RoleProvider = [
  {
    provide: 'ROLE_REPOSITORY',
    useFactory: (AppDataSource: DataSource) =>
      AppDataSource.getRepository(Role),
    inject: ['MYSQL_DATA_SOURCE'],
  },
];
