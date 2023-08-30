import { Module } from '@nestjs/common';
import { UserdietController } from './userdiet.controller';
import { UserdietService } from './userdiet.service';

@Module({
  controllers: [UserdietController],
  providers: [UserdietService]
})
export class UserdietModule {}
