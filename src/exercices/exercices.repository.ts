import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Exercice } from './exercices.entity';

@Injectable()
export class ExercicesRepository extends Repository<Exercice> {
  constructor(private dataSource: DataSource) {
    super(Exercice, dataSource.createEntityManager());
  }
}
