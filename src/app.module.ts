import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './app/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { InstituteModule } from './app/institute/institute.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true }), InstituteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
