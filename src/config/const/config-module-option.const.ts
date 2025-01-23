import appConfig from './app.config';
import { ConfigModuleOptions } from '@nestjs/config';

export const ConfigModuleOption: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: `./src/config/env/.env.${process.env.NODE_ENV}`,
  load: [appConfig],
};
