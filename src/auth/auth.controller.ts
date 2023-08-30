import { Body, Controller, Post, Param } from '@nestjs/common';
import { Get, Put, UseGuards } from '@nestjs/common/decorators';
import { AuthService } from './auth.service';
import { authCredentialsDto } from './Dto/auth-credentials.dto';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { UserCredentialsDto } from './Dto/user.signin.dto';
import { updateDto } from './Dto/updateDto.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/user')
  @UseGuards(AuthGuard())
  getAllUsers(@GetUser() user: User): User {
    user.password = '';
    return user;
  }

  @Get('/exercices')
  @UseGuards(AuthGuard())
  async getExercices(@GetUser() user: User): Promise<User> {
    user.password = '';
    user.id;
    return await this.authService.getAllExercices(user.id);
  }

  @Put('/user')
  @UseGuards(AuthGuard())
  updateUser(
    @GetUser() user: User,
    @Body() updateFolderDto: updateDto,
  ): Promise<User> {
    return this.authService.update(user.id, updateFolderDto);
  }

  @Put('/user/:id')
  @UseGuards(AuthGuard())
  updateUsers(
    @Param('id') id: string,
    @Body() updateFolderDto: updateDto,
  ): Promise<User> {
    return this.authService.update(id, updateFolderDto);
  }

  @Get('/users')
  @UseGuards(AuthGuard())
  getUsers(@GetUser() user: User): Promise<User[]> {
    return this.authService.getUsers(user.id);
  }

  @Get('/users/:id')
  @UseGuards(AuthGuard())
  getUserById(@Param('id') id: string): Promise<User> {
    return this.authService.getUser(id);
  }

  @Get()
  // @UseGuards(AuthGuard())
  getUser(): Promise<User[]> {
    return this.authService.getAllUsers();
  }

  @Post('/signup')
  signUp(@Body() authCredentialsDto: authCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body() authCredentialsDto: UserCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }
}
