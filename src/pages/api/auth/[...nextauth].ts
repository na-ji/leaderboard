import DiscordProvider from 'next-auth/providers/discord';
import NextAuth from 'next-auth';
import { config } from 'node-config-ts';

export default NextAuth({
  secret: config.secret,
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
  },
});
