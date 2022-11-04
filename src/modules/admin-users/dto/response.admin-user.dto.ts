import { ApiProperty } from '@nestjs/swagger';
import { CommonDto } from 'src/common/dto/common.dto';

export class AdminUserDto extends CommonDto {
  @ApiProperty({ example: 'admin' })
  username: string;
}
