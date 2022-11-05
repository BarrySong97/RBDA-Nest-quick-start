import { CommonEntity } from 'src/common/database/common';
import { Permission } from 'src/modules/permissions/entities/permission.entity';
import {
  Column,
  Entity,
  ManyToOne,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';

@Entity()
@Tree('closure-table')
export class PermissionMenu extends CommonEntity {
  @Column({ nullable: true })
  desc: string;
  @Column()
  path: string;
  @Column()
  name: string;
  @Column()
  icon: string;
  @TreeChildren({ cascade: ['remove'] })
  children: PermissionMenu[];
  @TreeParent()
  parent: PermissionMenu;
}
