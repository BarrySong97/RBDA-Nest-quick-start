import { CommonEntity } from 'src/common/database/common';
import { Permission } from 'src/modules/permissions/entities/permission.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Role extends CommonEntity {
  @Column()
  name: string;
  @Column()
  desc: string;
  @Column()
  parentId: number;
  @ManyToMany(() => Permission)
  @JoinTable()
  permissions: Permission[];
}
