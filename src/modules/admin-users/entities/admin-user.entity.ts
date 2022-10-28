import { CommonEntity } from 'src/common/database/common';
import { Role } from 'src/modules/roles/entities/role.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity({ name: 'admin_user' })
export class AdminUser extends CommonEntity {
  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}
