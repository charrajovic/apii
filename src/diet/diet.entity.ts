import { type } from 'os';
import { User } from 'src/auth/user.entity';
import { Sessions } from 'src/session/session.entity';
import { UserExercice } from 'src/user-exercie/exercices.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Diet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  recipe: string;

  @Column({ default: 0, nullable: true })
  calories: string;

  @Column({ default: null, nullable: true })
  protein: string;

  @Column({ default: 0, nullable: true })
  fat: string;

  @Column({ default: null, nullable: true })
  ingredients: string;

  @Column({ default: null, nullable: true })
  image: string;

  @Column({ nullable: true, default: true })
  status: Boolean;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;

  @OneToMany(() => UserExercice, (exercice) => exercice.exercice)
  userExercice: UserExercice[];
}
