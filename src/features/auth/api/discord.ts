import { config } from 'node-config-ts';
import type { APIPartialGuild, APIGuildMember } from 'discord-api-types/v9';

const getGuilds = async (accessToken: string): Promise<Array<APIPartialGuild>> => {
  const response = await fetch('https://discord.com/api/users/@me/guilds', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
};

const getGuildMember = async (guildId: string, userId: string): Promise<APIGuildMember> => {
  const response = await fetch(`https://discord.com/api/guilds/${guildId}/members/${userId}`, {
    headers: {
      Authorization: `Bot ${config.discord.botToken}`,
    },
  });

  return response.json();
};

interface UserAccess {
  finaleDecision: boolean;
  hasError: boolean;
  hasRole: boolean;
  isMemberOfGuild: boolean;
  isNotConfigured: boolean;
}

const commonAccess: Partial<UserAccess> = {
  hasError: false,
  isNotConfigured: false,
  hasRole: true,
  isMemberOfGuild: true,
};

const logUserAccess = (userName: string, userAccess: Partial<UserAccess>): void => {
  console.info(`${userName} tried to login: ${JSON.stringify({ ...commonAccess, ...userAccess })}`);
};

export const userHasAccess = async (userName: string, userAccessToken?: string, userId?: string): Promise<boolean> => {
  try {
    if (!userAccessToken || !config.discord.guildId) {
      logUserAccess(userName, { isNotConfigured: true, finaleDecision: true });
      return true;
    }

    const guilds = await getGuilds(userAccessToken);
    const isMemberOfGuild = guilds.some((guild) => guild.id === config.discord.guildId);

    if (!config.discord.roleId || !userId || !isMemberOfGuild) {
      logUserAccess(userName, { isMemberOfGuild, finaleDecision: isMemberOfGuild });
      return isMemberOfGuild;
    }

    const member = await getGuildMember(config.discord.guildId, userId);
    const hasRole = member.roles.some((role) => role === config.discord.roleId);

    logUserAccess(userName, { isMemberOfGuild, hasRole, finaleDecision: hasRole });

    return hasRole;
  } catch (error) {
    console.error(error);
    logUserAccess(userName, { hasError: true, finaleDecision: true });

    return false;
  }
};
