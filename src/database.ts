import { config } from 'node-config-ts';
import mysql from 'mysql2/promise';

const { host, user, password, scannerDatabase, leaderboardDatabase: database } = config.database;
const port: number = parseInt(`${config.database.port}`) ?? 3306;

export const leaderboardConnectionString = `mysql://${user}:${password}@${host}:${port}/${database}`;

export const pool = mysql.createPool({
  host,
  user,
  password,
  database: scannerDatabase,
  port,
  waitForConnections: true,
  connectionLimit: 3,
  queueLimit: 0,
});
