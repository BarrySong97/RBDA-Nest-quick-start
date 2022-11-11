import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { Repository, TreeRepository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @Inject('ROLE_REPOSITORY')
    private roleRepository: TreeRepository<Role>,
  ) {}
  async create(createRoleDto: CreateRoleDto) {
    const parentId = createRoleDto.parentId;
    const newRole = await this.roleRepository.save(createRoleDto);
    if (parentId && String(createRoleDto.parentId) !== 'root') {
      const parent = await this.findOne(parentId);
      newRole.parent = parent;
      return this.roleRepository.save(newRole);
    } else {
      return newRole;
    }
  }

  /**
   *
   * @returns tree
   */
  findAll() {
    return this.roleRepository.findTrees();
  }

  /**
   *
   * @returns flat tree list
   */
  async findFlatList() {
    return this.roleRepository.find();
  }

  async findOne(id: number) {
    return this.roleRepository.findOneBy({ id });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const updateRole = await this.roleRepository.save(updateRoleDto);
    // if get new parent, rebind their relation
    if (
      updateRole.parentId &&
      updateRole.parent?.id !== updateRoleDto.parentId
    ) {
      // change node to root
      if (String(updateRoleDto.parentId) === 'root') {
        updateRole.parent = null;
        this.roleRepository.save(updateRole);
      } else {
        const parent = await this.findOne(updateRoleDto.parentId);
        updateRole.parent = parent;
        this.roleRepository.save(updateRole);
      }
    }
    return updateRole;
  }

  remove(id: number) {
    return this.roleRepository.delete(id);
  }
}
