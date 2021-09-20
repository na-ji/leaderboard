import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { transformer } from '@/features/auth/entities/transformer';
import { UserEntity } from '@/features/auth/entities/userEntity';

@Entity({ name: 'pogo_leaderboard_sessions' })
export class SessionEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  sessionToken!: string;

  @Column({ type: 'uuid' })
  userId!: string;

  @Column({ transformer: transformer.date })
  expires!: string;

  @ManyToOne(() => UserEntity, (user) => user.sessions)
  user!: UserEntity;
}
