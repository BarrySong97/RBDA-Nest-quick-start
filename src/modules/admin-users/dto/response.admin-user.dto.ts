import { ApiProperty } from '@nestjs/swagger';
import { CommonDto } from 'src/common/dto/common.dto';
import { RoleDto } from 'src/modules/roles/dto/response-role.dto';

export class AdminUserDto extends CommonDto {
  @ApiProperty({ example: 'admin' })
  username: string;

  @ApiProperty({ nullable: true })
  role?: RoleDto;
}
