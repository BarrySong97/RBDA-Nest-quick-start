import { Injectable } from '@nestjs/common';
import { CreatePermissionMenuDto } from './dto/create-permission-menu.dto';
import { UpdatePermissionMenuDto } from './dto/update-permission-menu.dto';

@Injectable()
export class PermissionMenuService {
  create(createPermissionMenuDto: CreatePermissionMenuDto) {
    return 'This action adds a new permissionMenu';
  }

  findAll() {
    return `This action returns all permissionMenu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permissionMenu`;
  }

  update(id: number, updatePermissionMenuDto: UpdatePermissionMenuDto) {
    return `This action updates a #${id} permissionMenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} permissionMenu`;
  }
}
