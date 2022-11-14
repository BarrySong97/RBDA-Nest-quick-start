import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateAdminUserDto } from './dto/create-admin-user.dto';
import { UpdateAdminUserDto } from './dto/update-admin-user.dto';
import { Repository } from 'typeorm';
import { AdminUser } from './entities/admin-user.entity';
import { Role } from '../roles/entities/role.entity';

@Injectable()
export class AdminUsersService {
  constructor(
    @Inject('ADMIN_USER_REPOSITORY')
    private adminUserRepository: Repository<AdminUser>,
    @Inject('ROLE_REPOSITORY') private RoleService: Repository<Role>,
  ) {}
  async create(createAdminUserDto: CreateAdminUserDto) {
    const entity = this.adminUserRepository.create(createAdminUserDto);
    const r = await this.adminUserRepository.save(entity);
    return r;
  }

  async findAll() {
    const list = await this.adminUserRepository.find({
      relations: {
        role: true,
      },
    });
    return list;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminUser`;
  }

  async addRole(adminUser: AdminUser, roleId: number) {
    const role = await this.RoleService.findOneBy({
      id: roleId,
    });
    adminUser.role = role;
    await this.adminUserRepository.save(adminUser);
  }

  findByNameAndPassword(username: string, password: string) {
    return this.adminUserRepository.findOneBy({ username, password });
  }

  async update(id: number, updateAdminUserDto: UpdateAdminUserDto) {
    updateAdminUserDto.id = id;
    const adminUser = await this.adminUserRepository.findOneBy({ id: id });
    if (
      updateAdminUserDto.roleId &&
      (!adminUser.role || adminUser.role.id !== updateAdminUserDto.roleId)
    ) {
      await this.addRole(adminUser, updateAdminUserDto.roleId);
    }
    delete updateAdminUserDto.roleId;
    return this.adminUserRepository.update(id, updateAdminUserDto);
  }

  remove(id: number) {
    return this.adminUserRepository.delete(id);
  }
}
