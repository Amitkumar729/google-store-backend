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
    const user = await this.userService.findUserByEmail(email);
    // console.log("user: ", user);
    // console.log(password, user.password);
    // console.log(bcrypt.compare(password, user.password));
    if (user && (await bcrypt.compare(password, user.password))) {
      return {
        message: 'logged in successfully',
        id: user.id,
        email: user.email,
      };
    }
    return null;
  }

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    // console.log("User email: ", email, " User password: ", password);
    const user = await this.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
