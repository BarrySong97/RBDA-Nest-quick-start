import { ApiProperty } from '@nestjs/swagger';
import { CommonDto } from 'src/common/dto/common.dto';

export class RoleDto extends CommonDto {
  @ApiProperty({ example: 'admin' })
  name: string;
  @ApiProperty({ example: 'this is a admin' })
  desc: string;
  @ApiProperty({ example: 123 })
  parentId: number;
}
