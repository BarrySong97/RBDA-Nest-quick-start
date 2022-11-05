import { ApiProperty } from '@nestjs/swagger';

export class CreatePermissionMenuDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  desc: string;
  @ApiProperty()
  url: string;
  @ApiProperty()
  parentId: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  icon: string;
}
