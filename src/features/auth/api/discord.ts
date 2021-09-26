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

export const userHasAccess = async (userAccessToken?: string, userId?: string): Promise<boolean> => {
  try {
    if (!userAccessToken || !config.discord.guildId) {
      return true;
    }

    const guilds = await getGuilds(userAccessToken);
    const isMemberOfGuild = guilds.some((guild) => guild.id === config.discord.guildId);

    if (!config.discord.roleId || !userId || !isMemberOfGuild) {
      return isMemberOfGuild;
    }

    const member = await getGuildMember(config.discord.guildId, userId);

    return member.roles.some((role) => role === config.discord.roleId);
  } catch (error) {
    console.error(error);

    return false;
  }
};
