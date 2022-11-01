import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PermissionMenuService } from './permission-menu.service';
import { CreatePermissionMenuDto } from './dto/create-permission-menu.dto';
import { UpdatePermissionMenuDto } from './dto/update-permission-menu.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PermissionMenuDto } from './dto/permission-menu.dto';

@Controller('permission-menu')
@ApiTags('permission-menu')
export class PermissionMenuController {
  constructor(private readonly permissionMenuService: PermissionMenuService) {}

  @Post()
  @ApiOperation({ summary: 'create a new admin user' })
  @ApiResponse({
    status: 200,
    description: 'admin user',
    type: PermissionMenuDto,
  })
  create(@Body() createPermissionMenuDto: CreatePermissionMenuDto) {
    return this.permissionMenuService.create(createPermissionMenuDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'admin user',
    type: PermissionMenuDto,
    isArray: true,
  })
  findAll() {
    return this.permissionMenuService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'admin user',
    type: PermissionMenuDto,
  })
  findOne(@Param('id') id: number) {
    return this.permissionMenuService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'admin user',
    type: PermissionMenuDto,
  })
  update(
    @Param('id') id: number,
    @Body() updatePermissionMenuDto: UpdatePermissionMenuDto,
  ) {
    return this.permissionMenuService.update(+id, updatePermissionMenuDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'admin user',
    type: PermissionMenuDto,
  })
  remove(@Param('id') id: number) {
    return this.permissionMenuService.remove(+id);
  }
}
