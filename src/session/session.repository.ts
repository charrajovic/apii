import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Sessions } from './session.entity';

@Injectable()
export class SessionRepository extends Repository<Sessions> {
  constructor(private dataSource: DataSource) {
    super(Sessions, dataSource.createEntityManager());
  }

}