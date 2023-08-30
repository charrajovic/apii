import { Module } from '@nestjs/common';
import { ExercicesController } from './exercices.controller';
import { ExercicesService } from './exercices.service';
import { ExercicesRepository } from './exercices.repository';
import { Exercice } from './exercices.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Exercice])],
  controllers: [ExercicesController],
  providers: [ExercicesService, ExercicesRepository],
})
export class ExercicesModule {}
