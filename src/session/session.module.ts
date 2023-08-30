import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { Sessions } from './session.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionRepository } from './session.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Sessions])],
  controllers: [SessionController],
  providers: [SessionService, SessionRepository],
})
export class SessionModule {}
