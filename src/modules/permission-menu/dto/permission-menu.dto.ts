import { ApiProperty } from '@nestjs/swagger';
import { CommonDto } from 'src/common/dto/common.dto';

export class PermissionMenuDto extends CommonDto {
  @ApiProperty({ example: '1234hjh' })
  desc: string;
  @ApiProperty({ example: '/a/b' })
  path: string;
  @ApiProperty({ example: 'root' })
  name: string;
  @ApiProperty({ type: PermissionMenuDto, isArray: true })
  children: PermissionMenuDto[];
}
