import { Module } from '@nestjs/common';
import { UserExercieController } from './user-exercie.controller';
import { UserExercieService } from './user-exercie.service';

@Module({
  controllers: [UserExercieController],
  providers: [UserExercieService]
})
export class UserExercieModule {}
