import * as entities from '@/features/auth/entities';
import DiscordProvider from 'next-auth/providers/discord';
import NextAuth from 'next-auth';
import { config } from 'node-config-ts';
import { TypeORMLegacyAdapter } from '@next-auth/typeorm-legacy-adapter';

import { leaderboardConnectionString } from '@/database';
import { getTrainerName } from '@/features/auth/api';

export default NextAuth({
  secret: config.secret,
  adapter: config.enableAuth
    ? TypeORMLegacyAdapter({ type: 'mysql', url: leaderboardConnectionString, synchronize: true }, { entities })
    : undefined,
  session: {
    jwt: true,
  },
  providers: [
    DiscordProvider({
      clientId: config.discord.clientId,
      clientSecret: config.discord.clientSecret,
    }),
  ],
  callbacks: {
    async signIn() {
      // TODO: check guild/server
      return true;
    },
    async jwt({ token, user }) {
      if (user?.trainerId) {
        token.trainerId = user.trainerId;
        token.trainerName = await getTrainerName(`${token.trainerId}`);
      }

      return token;
    },
    async session({ session, token }) {
      if (token.trainerId) {
        session.trainerId = token.trainerId;
        session.trainerName = token.trainerName;
      }

      return session;
    },
  },
});
