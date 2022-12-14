import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'admin' })
  name: string;
  @ApiProperty({ example: 'this is a admin' })
  desc: string;
  @ApiProperty({ example: 123 })
  parentId: number;
}
