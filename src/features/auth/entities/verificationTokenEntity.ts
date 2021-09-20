import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { transformer } from '@/features/auth/entities/transformer';

@Entity({ name: 'pogo_leaderboard_verification_tokens' })
export class VerificationTokenEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  token!: string;

  @Column()
  identifier!: string;

  @Column({ transformer: transformer.date })
  expires!: string;
}
