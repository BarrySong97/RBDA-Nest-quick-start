import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PermissionDto } from './dto/permission.dto';

@ApiTags('permissions')
@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  @ApiOperation({ summary: 'create a new admin user' })
  @ApiResponse({
    status: 200,
    description: 'a permission',
    type: PermissionDto,
  })
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionsService.create(createPermissionDto);
  }

  @Get()
  @ApiOperation({ summary: 'create a new admin user' })
  @ApiResponse({
    status: 200,
    description: 'a permission',
    type: PermissionDto,
    isArray: true,
  })
  findAll() {
    return this.permissionsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'create a new admin user' })
  @ApiResponse({
    status: 200,
    description: 'a permission',
    type: PermissionDto,
  })
  findOne(@Param('id') id: string) {
    return this.permissionsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'create a new admin user' })
  @ApiResponse({
    status: 200,
    description: 'a permission',
    type: PermissionDto,
  })
  update(
    @Param('id') id: number,
    @Body() updatePermissionDto: UpdatePermissionDto,
  ) {
    return this.permissionsService.update(+id, updatePermissionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'create a new admin user' })
  @ApiResponse({
    status: 200,
    description: 'a permission',
    type: PermissionDto,
  })
  remove(@Param('id') id: number) {
    return this.permissionsService.remove(+id);
  }
}
