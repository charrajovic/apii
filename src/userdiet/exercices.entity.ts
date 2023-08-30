import { type } from 'os';
import { User } from 'src/auth/user.entity';
import { Diet } from 'src/diet/diet.entity';
import { Exercice } from 'src/exercices/exercices.entity';
import { Sessions } from 'src/session/session.entity';
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
export class UserDiet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Diet, (diet) => diet.id)
  @JoinColumn({ name: 'diet_id' })
  diet: Diet;
}
