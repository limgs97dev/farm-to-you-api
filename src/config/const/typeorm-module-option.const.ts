import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeormModuleOption: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'test',
  password: process.env.DB_USERNAME || 'test',
  database: process.env.DB_NAME || 'test',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.DB_LOGGING === 'Y',
};
