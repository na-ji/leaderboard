import { DefaultSession, DefaultJWT, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    trainerId?: string;
    trainerName?: string;
    discordId: string;
    userId: string;
  }

  interface User extends DefaultUser {
    trainerId?: string;
  }

  /** The OAuth profile returned from your provider */
  interface Profile {
    discriminator: string;
    id: string;
    username: string;
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends Record<string, unknown>, DefaultJWT {
    discordId: string;
    trainerId?: string;
    trainerName?: string;
    userId: string;
  }
}
