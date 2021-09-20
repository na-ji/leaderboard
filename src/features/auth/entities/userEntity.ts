import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { transformer } from '@/features/auth/entities/transformer';
import { AccountEntity } from '@/features/auth/entities/accountEntity';
import { SessionEntity } from '@/features/auth/entities/sessionEntity';

@Entity({ name: 'pogo_leaderboard_users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', nullable: true })
  name!: string | null;

  @Column({ type: 'varchar', nullable: true, unique: true })
  email!: string | null;

  @Column({ type: 'varchar', nullable: true, transformer: transformer.date })
  emailVerified!: string | null;

  @Column({ type: 'varchar', nullable: true })
  image!: string | null;

  @Column({ type: 'varchar', nullable: true })
  trainerId!: string | null;

  @OneToMany(() => SessionEntity, (session) => session.userId)
  sessions!: SessionEntity[];

  @OneToMany(() => AccountEntity, (account) => account.userId)
  accounts!: AccountEntity[];
}
