import DiscordProvider from 'next-auth/providers/discord';
import NextAuth from 'next-auth';
import { config } from 'node-config-ts';
import { TypeORMLegacyAdapter } from '@next-auth/typeorm-legacy-adapter';

import * as entities from '@/features/auth/entities';
import { getTrainerName } from '@/features/auth/api';
import { leaderboardConnectionString } from '@/database';
import { userHasAccess } from '@/features/auth/api/discord';

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
      authorization: 'https://discord.com/api/oauth2/authorize?scope=identify+email+guilds',
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      return userHasAccess(
        `${profile.username}#${profile.discriminator}`,
        account.access_token,
        account.providerAccountId,
      );
    },
    async jwt({ token, user, profile }) {
      if (user?.trainerId) {
        token.trainerId = user.trainerId;
        token.trainerName = await getTrainerName(`${token.trainerId}`);
      }

      if (profile?.id) {
        token.discordId = profile.id;
      }

      return token;
    },
    async session({ session, token }) {
      if (token.trainerId) {
        session.trainerId = token.trainerId;
        session.trainerName = token.trainerName;
        session.discordId = token.discordId;
      }

      return session;
    },
  },
});
