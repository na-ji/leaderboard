import { config } from 'node-config-ts';
import mysql from 'mysql2/promise';

const { host, user, password, name: database, port } = config.leaderboardDatabase;

export const leaderboardConnectionString = `mysql://${user}:${password}@${host}:${port ?? 3306}/${database}`;

export const madPool = mysql.createPool({
  host: config.madDatabase.host,
  user: config.madDatabase.user,
  password: config.madDatabase.password,
  database: config.madDatabase.name,
  port: config.madDatabase.port ?? 3306,
  waitForConnections: true,
  connectionLimit: 3,
  queueLimit: 0,
});

export const leaderboardPool = mysql.createPool({
  host: config.leaderboardDatabase.host,
  user: config.leaderboardDatabase.user,
  password: config.leaderboardDatabase.password,
  database: config.leaderboardDatabase.name,
  port: config.leaderboardDatabase.port ?? 3306,
  waitForConnections: true,
  connectionLimit: 3,
  queueLimit: 0,
});
