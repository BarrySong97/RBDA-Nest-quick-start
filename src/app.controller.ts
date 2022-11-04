import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AdminUserDto } from './modules/admin-users/dto/response.admin-user.dto';
class LoginUser {
  @ApiProperty({ example: 'admin' })
  username: string;
  @ApiProperty({ example: 'admin' })
  password: string;
}
class LoginResponse {
  @ApiProperty({ example: 'dsfdsfsd9fdsfs' })
  accessToken: string;
}
@Controller()
@ApiTags('login')
@ApiBearerAuth()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @ApiBody({ type: LoginUser })
  @ApiResponse({ type: LoginResponse })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiResponse({ type: AdminUserDto })
  getProfile(@Request() req) {
    return req.user;
  }
}
