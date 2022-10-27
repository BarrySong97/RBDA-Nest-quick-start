import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminUserDto {
  @ApiProperty({ example: 'barrysong' })
  username: string;
  @ApiProperty({ example: '123456a' })
  password: string;
}
