import { WinstonModuleOptions } from 'nest-winston';
import * as winston from 'winston';
import { utilities, WinstonModule } from 'nest-winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

const logDir = 'logs';

const fileLogOptions = {
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
};

export const WinstonModuleOption: WinstonModuleOptions = {
  transports:
    process.env.NODE_ENV === 'production'
      ? [
          new DailyRotateFile({
            level: 'info',
            dirname: logDir,
            filename: 'info-%DATE%.log',
            ...fileLogOptions,
          }),
          new DailyRotateFile({
            level: 'error',
            dirname: logDir,
            filename: 'error-%DATE%.log',
            ...fileLogOptions,
          }),
        ]
      : [
          new DailyRotateFile({
            level: 'info',
            dirname: logDir,
            filename: 'info-%DATE%.log',
            ...fileLogOptions,
          }),
          new DailyRotateFile({
            level: 'error',
            dirname: logDir,
            filename: 'error-%DATE%.log',
            ...fileLogOptions,
          }),
          new winston.transports.Console({
            level: 'debug',
            format: winston.format.combine(
              winston.format.timestamp(),
              winston.format.colorize(),
              winston.format.simple(),
            ),
          }),
        ],
};
