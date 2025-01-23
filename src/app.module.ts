import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModuleOption } from './config/const/config-module-option.const';
import { TypeormModuleOption } from './config/const/typeorm-module-option.const';
import { WinstonModule } from 'nest-winston';
import { WinstonModuleOption } from './config/const/winston-module-option.const';

@Module({
  imports: [
    ConfigModule.forRoot(ConfigModuleOption),
    TypeOrmModule.forRoot(TypeormModuleOption),
    WinstonModule.forRoot(WinstonModuleOption),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
