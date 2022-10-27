import { CommonEntity } from 'src/common/database/common';
import { PermissionMenu } from 'src/modules/permission-menu/entities/permission-menu.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Permission extends CommonEntity {
  @Column()
  name: string;
  @Column()
  desc: string;
  @Column()
  type: string;
  @OneToMany(() => PermissionMenu, (pm: PermissionMenu) => pm.permission)
  menus: PermissionMenu[];
}
