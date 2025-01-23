import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<number>('APP.PORT');
  const globalPrefix = configService.get<string>('APP.GLOBAL_PREFIX');

  app.setGlobalPrefix(globalPrefix);
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  await app.listen(port);

  console.log(`Server on! PORT: ${process.env.PORT}`);
}
bootstrap();
