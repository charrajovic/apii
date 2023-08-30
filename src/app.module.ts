// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { PostsModule } from './posts/posts.module';
// import { TasksController } from './tasks/tasks.controller';
// import { TasksModule } from './tasks/tasks.module';

// @Module({
//   imports: [PostsModule, TasksModule],
//   controllers: [AppController, TasksController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';
import { ExercicesModule } from './exercices/exercices.module';
import { SessionModule } from './session/session.module';
import { Sessions } from './session/session.entity';
import { Exercice } from './exercices/exercices.entity';
import { UserExercieModule } from './user-exercie/user-exercie.module';
import { UserExercice } from './user-exercie/exercices.entity';
import { DietModule } from './diet/diet.module';
import { UserdietModule } from './userdiet/userdiet.module';
import { Diet } from './diet/diet.entity';
import { UserDiet } from './userdiet/exercices.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'gym',
      entities: [User, Sessions, Exercice, UserExercice, Diet, UserDiet],
      synchronize: true,
    }),
    AuthModule,
    ExercicesModule,
    SessionModule,
    UserExercieModule,
    DietModule,
    UserdietModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
