import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './entities/permission.entity';

@Injectable()
export class PermissionsService {
  constructor(
    @Inject('PERMISSION_REPOSITORY')
    private permissionRepository: Repository<Permission>,
  ) {}

  async create(createPermissionDto: CreatePermissionDto) {
    const entity = this.permissionRepository.create(createPermissionDto);
    const r = await this.permissionRepository.save(entity);
    return r;
  }

  findAll() {
    return this.permissionRepository.find();
  }

  findOne(id: number) {
    return this.permissionRepository.findBy({ id: id });
  }

  async update(id: number, updatePermissionDto: UpdatePermissionDto) {
    updatePermissionDto.id = id;
    const item = await this.permissionRepository.findOneBy({ id: id });
    if (item) {
      return this.permissionRepository.update(id, updatePermissionDto);
    } else {
      throw new NotFoundException('Entity not found');
    }
  }

  remove(id: number) {
    return this.permissionRepository.delete(id);
  }
}
