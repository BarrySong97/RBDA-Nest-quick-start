import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class CommonEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @UpdateDateColumn()
  updatedDate: Date;

  @CreateDateColumn()
  createdDate: Date;
}
