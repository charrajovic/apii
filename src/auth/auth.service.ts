import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { InjectRepository } from '@nestjs/typeorm';
import { authCredentialsDto } from './Dto/auth-credentials.dto';
import { JwtPayload } from './jwt-payload';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';
import { UserCredentialsDto } from './Dto/user.signin.dto';
import { updateDto } from './Dto/updateDto.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialsDto: authCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(authCredentialsDto);
  }

  async signIn(
    authCredentialsDto: UserCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { email, password } = authCredentialsDto;
    const user = this.usersRepository.findOne({ where: { email } });
    var bcrypt = require('bcryptjs');
    if (user && (await bcrypt.compare(password, (await user).password))) {
      const payload: JwtPayload = { email };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException(
        'Please check your username and password',
      );
    }
  }

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.getAllUsers();
  }

  async getAllExercices(id: string): Promise<User> {
    const usex = await this.usersRepository
      .createQueryBuilder('User')
      .leftJoinAndSelect('User.userExercice', 'userExercice')
      .leftJoinAndSelect('userExercice.exercice', 'exercice')
      .leftJoinAndSelect('exercice.sessions', 'sessions')
      .leftJoinAndSelect('User.userDiet', 'userDiet')
      .leftJoinAndSelect('userDiet.diet', 'diet')
      .where(`User.id = '${id}'`)
      .getOne();
    return usex;
  }

  async update(id: string, updateFolderDto: updateDto): Promise<User> {
    console.log(id);
    console.log(updateFolderDto);
    await this.usersRepository.update(id, updateFolderDto);
    console.log('-------------');
    return await this.getUser(id);
  }

  async getUser(id: string): Promise<User> {
    const one = await this.usersRepository
      .createQueryBuilder('User')
      .leftJoinAndSelect('User.exercices', 'exercices');
    one.leftJoinAndSelect('exercices.sessions', 'session');
    await one.andWhere(`User.id like '${id}'`);
    // console.log(await one);
    return await one.getOne();
  }

  async getUsers(id: string): Promise<User[]> {
    const one = await this.usersRepository
      .createQueryBuilder('User')
      .leftJoinAndSelect('User.exercices', 'exercices');
    one.leftJoinAndSelect('exercices.sessions', 'session');
    await one.andWhere(`User.id like '${id}'`);
    // console.log(await one);
    return await one.getMany();
  }
}
