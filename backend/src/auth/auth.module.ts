import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
 

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'AmitKumar',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [AuthController, ],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
