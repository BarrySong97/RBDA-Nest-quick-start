import { DataSource } from 'typeorm';
import { Permission } from './entities/permission.entity';

export const PermissionProvider = [
  {
    provide: 'PERMISSION_REPOSITORY',
    useFactory: (AppDataSource: DataSource) =>
      AppDataSource.getRepository(Permission),
    inject: ['MYSQL_DATA_SOURCE'],
  },
];
