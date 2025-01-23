import { registerAs } from '@nestjs/config';

export default registerAs('APP', () => ({
  NODE_ENV: process.env.NODE_ENV || 'local',
  PORT: parseInt(process.env.PORT) || '3000',
  GLOBAL_PREFIX: process.env.API_PREFIX || 'api',
}));
