import { config } from 'node-config-ts';
import mysql from 'mysql2/promise';

const { host, user, password, leaderboardDatabase: database, port } = config.database;

export const leaderboardConnectionString = `mysql://${user}:${password}@${host}:${port ?? 3306}/${database}`;

export const pool = mysql.createPool({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.madDatabase,
  port: config.database.port ?? 3306,
  waitForConnections: true,
  connectionLimit: 3,
  queueLimit: 0,
});
