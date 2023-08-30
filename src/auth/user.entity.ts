import { Exercice } from 'src/exercices/exercices.entity';
import { UserExercice } from 'src/user-exercie/exercices.entity';
import { UserDiet } from 'src/userdiet/exercices.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  gender: string;

  @Column()
  age: string;

  @Column()
  poids: string;

  @Column()
  taille: string;

  @Column({ nullable: true, default: null })
  blessure: string;

  @Column()
  objectif: string;

  @Column({ nullable: true, default: false })
  type: Boolean;

  @Column({ nullable: true, default: 1 })
  status: string;

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

  @OneToMany(() => UserExercice, (exercice) => exercice.user)
  userExercice: UserExercice[];

  @OneToMany(() => UserDiet, (diet) => diet.user)
  userDiet: UserDiet[];
}
