import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { transformer } from '@/features/auth/entities/transformer';
import { UserEntity } from '@/features/auth/entities/userEntity';

@Entity({ name: 'pogo_leaderboard_accounts' })
export class AccountEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'uuid' })
  userId!: string;

  @Column()
  type!: string;

  @Column()
  provider!: string;

  @Column()
  providerAccountId!: string;

  @Column({ type: 'varchar', nullable: true })
  refresh_token!: string;

  @Column({ type: 'varchar', nullable: true })
  access_token!: string | null;

  @Column({
    nullable: true,
    type: 'bigint',
    transformer: transformer.bigint,
  })
  expires_at!: number | null;

  @Column({ type: 'varchar', nullable: true })
  token_type!: string | null;

  @Column({ type: 'varchar', nullable: true })
  scope!: string | null;

  @Column({ type: 'varchar', nullable: true })
  id_token!: string | null;

  @Column({ type: 'varchar', nullable: true })
  session_state!: string | null;

  @Column({ type: 'varchar', nullable: true })
  oauth_token_secret!: string | null;

  @Column({ type: 'varchar', nullable: true })
  oauth_token!: string | null;

  @ManyToOne('UserEntity', 'accounts', {
    createForeignKeyConstraints: true,
  })
  user!: UserEntity;
}
