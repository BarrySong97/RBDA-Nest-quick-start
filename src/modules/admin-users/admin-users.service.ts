import { ConflictException, Inject, Injectable } from '@nestjs/common';
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

  async findAll() {
    const list = await this.adminUserRepository.find();
    list.forEach((v) => {
      delete v.password;
    });
    return list;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminUser`;
  }

  findByNameAndPassword(username: string, password: string) {
    return this.adminUserRepository.findOneBy({ username, password });
  }

  async update(id: number, updateAdminUserDto: UpdateAdminUserDto) {
    updateAdminUserDto.id = id;
    const item = await this.adminUserRepository.findOneBy({ id: id });
    if (item) {
      return this.adminUserRepository.update(id, updateAdminUserDto);
    } else {
      throw new ConflictException('Entity not found');
    }
  }

  remove(id: number) {
    return this.adminUserRepository.delete(id);
  }
}
