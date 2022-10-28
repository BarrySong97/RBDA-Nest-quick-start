import { CommonDto } from 'src/common/dto/common.dto';

export class AdminUserDto extends CommonDto {
  username: string;
  password: string;
}
