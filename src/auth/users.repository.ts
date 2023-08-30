import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { authCredentialsDto } from './Dto/auth-credentials.dto';
import { User } from './user.entity';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
// import * as bcrypt from 'bcryptjs'

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(authCredentialsDto: authCredentialsDto): Promise<void> {
    const {name, lastname, email,password,gender, age,poids,taille,blessure,objectif} = authCredentialsDto;
    var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync();
    var hash = bcrypt.hashSync(password, salt);

    console.log(salt,hash)

    const user = this.create({name, lastname, email,password: hash, gender, age,poids,taille,blessure,objectif});
    try {
        await this.save(user);
    }
    catch(error) {
        console.log(error);
        console.log(error.code);
        if(error.code === 'ER_DUP_ENTRY') {
            throw new ConflictException('Username already exist')
        }
        else {
            throw new InternalServerErrorException();
        }
        
    }
  }

  async getAllUsers(): Promise<User[]> {
    return this.query('select * from user');
  }

//   async createTask({ title, description }: createTaskDTO): Promise<Task> {
//     const task = this.create({
//       title,
//       description,
//       status: TaskStatus.OPEN,
//     });

//     await this.save(task);
//     return task;
//   }
}