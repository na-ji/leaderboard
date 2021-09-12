import { config } from 'node-config-ts';
import mysql from 'mysql2/promise';

const { host, user, password, name: database } = config.database;

export const pool = mysql.createPool({
  host,
  user,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});
