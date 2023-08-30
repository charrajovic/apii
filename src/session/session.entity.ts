
import { Exercice } from 'src/exercices/exercices.entity';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne} from 'typeorm'


@Entity()
export class Sessions {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Exercice, (exercice) => exercice.id)
    @JoinColumn({ name: 'exercice_id' })
    exerciceId: Exercice;

    @Column()
    duree: string;

    @Column()
    name: string;

    @Column({ nullable: true, default: true })
    status: Boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
}