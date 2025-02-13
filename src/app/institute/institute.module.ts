import { Module } from '@nestjs/common';
import { InstituteController } from './institute.controller';
import { InstituteService } from './service/institute.service';

@Module({
  controllers: [InstituteController],
  providers: [InstituteService]
})
export class InstituteModule {}
