import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-user')
  createUser(@Body() createUserDto: CreateUserDto) {
    try {
      return this.userService.createUser(createUserDto);
    } catch (error) {
      return {
        status: 'error',
        message: 'Internal server error',
        error: error.response || null,
      };
    }
  }
}
