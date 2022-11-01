import { PartialType } from '@nestjs/swagger';
import { CreatePermissionMenuDto } from './create-permission-menu.dto';

export class UpdatePermissionMenuDto extends PartialType(
  CreatePermissionMenuDto,
) {}
