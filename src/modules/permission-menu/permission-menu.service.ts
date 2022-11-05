import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, TreeRepository } from 'typeorm';
import { CreatePermissionMenuDto } from './dto/create-permission-menu.dto';
import { UpdatePermissionMenuDto } from './dto/update-permission-menu.dto';
import { PermissionMenu } from './entities/permission-menu.entity';

@Injectable()
export class PermissionMenuService {
  constructor(
    @Inject('PERMISSION_MENU_REPOSITORY')
    private permissionMenuRepository: TreeRepository<PermissionMenu>,
  ) {}
  async create(createPermissionMenuDto: CreatePermissionMenuDto) {
    const newMenu = await this.permissionMenuRepository.save(
      createPermissionMenuDto,
    );
    if (
      createPermissionMenuDto.parentId &&
      String(createPermissionMenuDto.parentId) !== 'root'
    ) {
      const parent = await this.findOne(createPermissionMenuDto.parentId);
      newMenu.parent = parent;
      this.permissionMenuRepository.save(newMenu);
    } else {
      return newMenu;
    }
  }

  findAll() {
    return this.permissionMenuRepository.findTrees();
  }

  findOne(id: number) {
    return this.permissionMenuRepository.findOneBy({ id });
  }

  async update(id: number, updatePermissionMenuDto: UpdatePermissionMenuDto) {
    const updateMenu = await this.permissionMenuRepository.save(
      updatePermissionMenuDto,
    );
    // if get new parent, rebind their relation
    if (
      updateMenu.parentId &&
      updateMenu.parent?.id !== updatePermissionMenuDto.parentId
    ) {
      // change node to root
      if (String(updatePermissionMenuDto.parentId) === 'root') {
        updateMenu.parent = null;
        this.permissionMenuRepository.save(updateMenu);
      } else {
        const parent = await this.findOne(updatePermissionMenuDto.parentId);
        updateMenu.parent = parent;
        this.permissionMenuRepository.save(updateMenu);
      }
    }
    return updateMenu;
  }

  remove(id: number) {
    return this.permissionMenuRepository.delete(id);
  }
}
