import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  private readonly trustedDomains = ['gmail.com', 'outlook.com'];
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  private isValidEmailDomain(email: string): boolean {
    const domain = email.split('@')[1];
    return this.trustedDomains.includes(domain);
  }
  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<{ status: string; message: string; data?: User; error?: string }> {
    try {
      const { email, password } = createUserDto;
      const existingUser = await this.userModel.findOne({ email });

      if (existingUser) {
        throw new BadRequestException('User already exists');
      }

      if (!this.isValidEmailDomain(email)) {
        throw new BadRequestException('Email must be from a trusted provider');
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const createdUser = new this.userModel({
        email,
        password: hashedPassword,
      });
      // console.log(createdUser);
      createdUser.save();
      return {
        status: 'success',
        message: 'User created successfully.',
        data: createdUser,
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'Failed to create user',
        error: error.response,
      };
    }
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email }).exec();
  }
}
