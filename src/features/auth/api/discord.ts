import { config } from 'node-config-ts';
import type { APIPartialGuild, APIGuildMember } from 'discord-api-types/v10';

const getGuilds = async (accessToken: string): Promise<Array<APIPartialGuild>> => {
  const response = await fetch('https://discord.com/api/users/@me/guilds', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = response.json();

  if ('message' in data && typeof data.message === 'string') {
    throw new Error(`Failed to get guilds: ${JSON.stringify(data)}`);
  }

  return data;
};

const getGuildMember = async (guildId: string, userId: string): Promise<APIGuildMember> => {
  const response = await fetch(`https://discord.com/api/guilds/${guildId}/members/${userId}`, {
    headers: {
      Authorization: `Bot ${config.discord.botToken}`,
    },
  });

  const data = response.json();

  if ('message' in data && typeof data.message === 'string') {
    throw new Error(`Failed to get user's #${userId} guild #${guildId}: ${JSON.stringify(data)}`);
  }

  return data;
};

interface UserAccess {
  finaleDecision: boolean;
  hasError: boolean;
  hasRole: boolean;
  isMemberOfGuild: boolean;
  areGuildIdsConfigured: boolean;
  areRoleIdsConfigured: boolean;
}

const commonAccess: Partial<UserAccess> = {
  hasError: false,
  hasRole: false,
  isMemberOfGuild: false,
};

const logUserAccess = (userName: string, userAccess: Partial<UserAccess>): void => {
  console.info(`${userName} tried to login: ${JSON.stringify({ ...commonAccess, ...userAccess })}`);
};

export const userHasAccess = async (userName: string, userAccessToken?: string, userId?: string): Promise<boolean> => {
  const areGuildIdsConfigured = Array.isArray(config.discord.guildId) && config.discord.guildId.length > 0;
  const areRoleIdsConfigured = Array.isArray(config.discord.roleId) && config.discord.roleId.length > 0;

  try {
    if (!userAccessToken || !areGuildIdsConfigured) {
      logUserAccess(userName, { areGuildIdsConfigured, areRoleIdsConfigured, finaleDecision: true });
      return true;
    }

    const guilds = await getGuilds(userAccessToken);
    const guild = guilds.find((membersGuild) => config.discord.guildId.includes(membersGuild.id));
    const isMemberOfGuild = !!guild;

    if (!areRoleIdsConfigured || !userId || !isMemberOfGuild) {
      logUserAccess(userName, {
        areGuildIdsConfigured,
        areRoleIdsConfigured,
        isMemberOfGuild,
        finaleDecision: isMemberOfGuild,
      });
      return isMemberOfGuild;
    }

    const member = await getGuildMember(guild.id, userId);
    const hasRole = member.roles.some((role) => config.discord.roleId.includes(role));

    logUserAccess(userName, {
      areGuildIdsConfigured,
      areRoleIdsConfigured,
      isMemberOfGuild,
      hasRole,
      finaleDecision: hasRole,
    });

    return hasRole;
  } catch (error) {
    console.error(error);
    logUserAccess(userName, { areGuildIdsConfigured, areRoleIdsConfigured, hasError: true, finaleDecision: false });

    return false;
  }
};
