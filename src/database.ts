import { config } from 'node-config-ts';
import mysql, { Connection } from 'mysql2/promise';

export const connectToDatabase = async (): Promise<Connection> => {
  const { host, user, password, name: database } = config.database;

  return mysql.createConnection({ host, user, password, database });
};
