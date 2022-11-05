import { CommonEntity } from 'src/common/database/common';
import { Permission } from 'src/modules/permissions/entities/permission.entity';
import { Column, Entity, Tree, TreeChildren, TreeParent } from 'typeorm';

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
}
