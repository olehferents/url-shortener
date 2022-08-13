import { config } from 'dotenv';

config({ path: './.env' });

export const server = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  baseURL: process.env.APP_BASE_URL || '',
}

export const dbConnections = {
  mongo:  {
    name: 'mongo',
    connectionUrl: String(process.env.DATABASE_URL),
  }
};
