import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminUsersService } from 'src/modules/admin-users/admin-users.service';
import { AdminUser } from 'src/modules/admin-users/entities/admin-user.entity';

@Injectable()
export class AuthService {
  constructor(
    private adminUsersService: AdminUsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.adminUsersService.findByNameAndPassword(
      username,
      pass,
    );
    const { password, ...result } = user;
    return result;
  }

  async login(user: AdminUser) {
    const payload = { username: user.username, sub: user.id, role: user.role };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
