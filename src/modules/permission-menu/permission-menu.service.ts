import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePermissionMenuDto } from './dto/create-permission-menu.dto';
import { UpdatePermissionMenuDto } from './dto/update-permission-menu.dto';
import { PermissionMenu } from './entities/permission-menu.entity';

@Injectable()
export class PermissionMenuService {
  constructor(
    @Inject('PERMISSION_MENU_REPOSITORY')
    private permissionMenuRepository: Repository<PermissionMenu>,
  ) {}
  async create(createPermissionMenuDto: CreatePermissionMenuDto) {
    const entity = this.permissionMenuRepository.create(
      createPermissionMenuDto,
    );
    const r = await this.permissionMenuRepository.save(entity);
    return r;
  }

  async addChild(id: number, parentId: number) {}

  findAll() {
    return this.permissionMenuRepository.find();
  }

  findOne(id: number) {
    return this.permissionMenuRepository.findBy({ id });
  }

  async update(id: number, updatePermissionMenuDto: UpdatePermissionMenuDto) {
    updatePermissionMenuDto.id = id;
    const item = await this.permissionMenuRepository.findOneBy({ id: id });
    if (item) {
      return this.permissionMenuRepository.update(id, updatePermissionMenuDto);
    } else {
      throw new NotFoundException('Entity not found');
    }
  }

  remove(id: number) {
    return this.permissionMenuRepository.delete(id);
  }
}
