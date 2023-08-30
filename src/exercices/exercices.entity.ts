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
export class Exercice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: 0, nullable: true })
  calories: string;

  @Column({ default: null, nullable: true })
  equipments: string;

  @Column({ default: 0, nullable: true })
  duree: string;

  @Column({ default: null, nullable: true })
  benefits: string;

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

  @OneToMany(() => Sessions, (session) => session.exerciceId)
  sessions: Sessions[];

  @OneToMany(() => UserExercice, (exercice) => exercice.exercice)
  userExercice: UserExercice[];
}
