import { Inject, Injectable } from '@nestjs/common';
import { CreateAdminUserDto } from './dto/create-admin-user.dto';
import { UpdateAdminUserDto } from './dto/update-admin-user.dto';
import { Repository } from 'typeorm';
import { AdminUser } from './entities/admin-user.entity';

@Injectable()
export class AdminUsersService {
  constructor(
    @Inject('ADMIN_USER_REPOSITORY')
    private adminUserRepository: Repository<AdminUser>,
  ) {}
  async create(createAdminUserDto: CreateAdminUserDto) {
    const entity = this.adminUserRepository.create(createAdminUserDto);
    const r = await this.adminUserRepository.save(entity);
    return r;
  }

  findAll() {
    return `This action returns all adminUsers1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminUser`;
  }

  update(id: number, updateAdminUserDto: UpdateAdminUserDto) {
    return `This action updates a #${id} adminUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminUser`;
  }
}
