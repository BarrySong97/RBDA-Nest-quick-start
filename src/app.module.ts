import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminUsersModule } from './modules/admin-users/admin-users.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './exceptions/http.exception.filter';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from './utils';
import { LoggerModule } from 'nestjs-pino';
import { pinoHttpOption } from './common/logger/logger.provider';
@Module({
  imports: [
    AdminUsersModule,
    LoggerModule.forRoot({
      pinoHttp: pinoHttpOption(),
    }),
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
