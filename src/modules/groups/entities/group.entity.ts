import { CommonEntity } from 'src/common/database/common';
import { Column, Entity, Tree, TreeChildren, TreeParent } from 'typeorm';

@Entity()
@Tree('closure-table')
export class Group extends CommonEntity {
  @Column()
  name: string;
  @Column()
  desc: string;
  @TreeChildren({ cascade: ['remove'] })
  children: Group[];
  @TreeParent()
  parent: Group;
}
