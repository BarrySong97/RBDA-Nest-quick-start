import { DataSource } from 'typeorm';
import { PermissionMenu } from './entities/permission-menu.entity';

export const PermissionMenuProvider = [
  {
    provide: 'PERMISSION_MENU_REPOSITORY',
    useFactory: (AppDataSource: DataSource) =>
      AppDataSource.getTreeRepository(PermissionMenu),
    inject: ['MYSQL_DATA_SOURCE'],
  },
];
