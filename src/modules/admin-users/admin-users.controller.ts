import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdminUsersService } from './admin-users.service';
import { CreateAdminUserDto } from './dto/create-admin-user.dto';
import { AdminUserDto } from './dto/response.admin-user.dto';
import { UpdateAdminUserDto } from './dto/update-admin-user.dto';
@ApiTags('adminUser')
@Controller('admin-users')
export class AdminUsersController {
  constructor(
    private readonly adminUsersService: AdminUsersService,
    private readonly configService: ConfigService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'create a new admin user' })
  @ApiResponse({
    status: 200,
    description: 'admin user',
    type: AdminUserDto,
  })
  create(
    @Body() createAdminUserDto: CreateAdminUserDto,
  ): Promise<AdminUserDto> {
    return this.adminUsersService.create(createAdminUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'find all admin users' })
  @ApiResponse({
    status: 200,
    description: 'admin user list',
    type: AdminUserDto,
    isArray: true,
  })
  findAll(): Promise<AdminUserDto[]> {
    return this.adminUsersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get admin user by id' })
  @ApiResponse({
    status: 200,
    description: 'admin user ',
    type: AdminUserDto,
  })
  findOne(@Param('id') id: string) {
    return this.adminUsersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update admin user by id' })
  @ApiResponse({
    status: 200,
    description: 'admin user ',
    type: CreateAdminUserDto,
  })
  update(
    @Param('id') id: number,
    @Body() updateAdminUserDto: UpdateAdminUserDto,
  ) {
    return this.adminUsersService.update(id, updateAdminUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete user by id' })
  @ApiResponse({
    status: 200,
    description: 'admin user ',
    type: CreateAdminUserDto,
  })
  remove(@Param('id') id: number) {
    return this.adminUsersService.remove(id);
  }
}
