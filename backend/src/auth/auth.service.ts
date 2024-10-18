import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    try {
      const user = await this.userService.findUserByEmail(email);

      if (user && (await bcrypt.compare(password, user.password))) {
        return {
          status: 'success',
          message: 'logged in successfully',
          id: user.id,
          email: user.email,
        };
      }
    } catch (error) {
      return {
        status: 'error',
        message: 'Invalid credentials.',
        error: error.response,
      };
    }
    return null;
  }

  async login(loginUserDto: LoginUserDto) {
    try {
      const { email, password } = loginUserDto;

      const user = await this.validateUser(email, password);
      if (!user) {
        throw new UnauthorizedException('Invalid email or password');
      }
      const payload = { email: user.email, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'Invalid credentials.',
        error: error.response,
      };
    }
  }
}
