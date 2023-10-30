import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ApiKeyStrategy } from './strategies/api-key.strategy';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [PassportModule],
  providers: [AuthService, ApiKeyStrategy, ConfigService],
  exports: [AuthService],
})
export class AuthModule {}
