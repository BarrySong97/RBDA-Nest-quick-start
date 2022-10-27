import { CommonEntity } from 'src/common/database/common';
import { AdminUser } from 'src/modules/admin-users/entities/admin-user.entity';
import { Role } from 'src/modules/roles/entities/role.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Group extends CommonEntity {
  @Column()
  name: string;
  @Column()
  desc: string;
  @Column()
  parentId: number;
  @ManyToMany(() => AdminUser)
  @JoinTable()
  adminUsers: AdminUser[];
  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}
