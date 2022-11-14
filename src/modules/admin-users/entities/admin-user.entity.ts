import { CommonEntity } from 'src/common/database/common';
import { Role } from 'src/modules/roles/entities/role.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity({ name: 'admin_user' })
export class AdminUser extends CommonEntity {
  @Column()
  username: string;

  @Column({ select: false })
  password: string;

  @ManyToOne(() => Role, (role) => role.adminUsers)
  role: Role;
}
