import { CommonEntity } from 'src/common/database/common';
import { Permission } from 'src/modules/permissions/entities/permission.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class PermissionMenu extends CommonEntity {
  @Column()
  desc: string;
  @Column()
  url: string;
  @Column()
  parentId: string;
  @Column()
  name: string;
  @Column()
  icon: string;
  @ManyToOne(() => Permission, (permission: Permission) => permission.menus)
  permission: Permission;
}
