import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RoleDto } from './dto/response-role.dto';

@Controller('roles')
@ApiTags('Role')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @ApiResponse({ type: RoleDto, status: 200 })
  @ApiOperation({ description: 'add a role' })
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  @ApiResponse({ type: RoleDto, status: 200, isArray: true })
  @ApiOperation({ description: 'get list of roles' })
  @ApiQuery({
    name: 'type',
    enum: ['tree', 'list'],
    enumName: 'RoleRequestListType',
    required: false,
  })
  findAll(@Query('type') type: 'tree' | 'list' = 'tree') {
    if (type === 'tree') {
      return this.rolesService.findAll();
    } else {
      return this.rolesService.findFlatList();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ type: RoleDto, status: 200 })
  @ApiOperation({ description: 'updated a role' })
  update(@Param('id') id: number, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  @ApiResponse({ type: RoleDto, status: 200 })
  @ApiOperation({ description: 'delete a role by id' })
  remove(@Param('id') id: number) {
    return this.rolesService.remove(id);
  }
}
