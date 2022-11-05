import { DataSource } from 'typeorm';
import { Group } from './entities/group.entity';

export const GroupProvider = [
  {
    provide: 'GROUP_REPOSITORY',
    useFactory: (AppDataSource: DataSource) =>
      AppDataSource.getTreeRepository(Group),
    inject: ['MYSQL_DATA_SOURCE'],
  },
];
