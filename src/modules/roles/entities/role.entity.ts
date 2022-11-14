import { CommonEntity } from 'src/common/database/common';
import { AdminUser } from 'src/modules/admin-users/entities/admin-user.entity';
import { Permission } from 'src/modules/permissions/entities/permission.entity';
import {
  Admin,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';

@Entity()
@Tree('closure-table')
export class Role extends CommonEntity {
  @Column()
  name: string;
  @Column({ nullable: true })
  desc: string;
  @TreeChildren({ cascade: ['remove'] })
  children: Role[];
  @TreeParent()
  parent: Role;
  @OneToMany(() => AdminUser, (adminUser) => adminUser.role)
  adminUsers: AdminUser[];
}
