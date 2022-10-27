import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PermissionMenuService } from './permission-menu.service';
import { CreatePermissionMenuDto } from './dto/create-permission-menu.dto';
import { UpdatePermissionMenuDto } from './dto/update-permission-menu.dto';

@Controller('permission-menu')
export class PermissionMenuController {
  constructor(private readonly permissionMenuService: PermissionMenuService) {}

  @Post()
  create(@Body() createPermissionMenuDto: CreatePermissionMenuDto) {
    return this.permissionMenuService.create(createPermissionMenuDto);
  }

  @Get()
  findAll() {
    return this.permissionMenuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permissionMenuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermissionMenuDto: UpdatePermissionMenuDto) {
    return this.permissionMenuService.update(+id, updatePermissionMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permissionMenuService.remove(+id);
  }
}
