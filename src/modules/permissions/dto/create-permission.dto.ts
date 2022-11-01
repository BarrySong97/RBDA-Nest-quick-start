import { ApiProperty } from '@nestjs/swagger';
import { CommonDto } from 'src/common/dto/common.dto';

export class CreatePermissionDto extends CommonDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  desc: string;
  @ApiProperty()
  type: string;
}
