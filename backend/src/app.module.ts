import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CompanyModule } from './modules/company/company.module';
import { ApplicationModule } from './modules/application/application.module';

@Module({
  imports: [DatabaseModule, CompanyModule, ApplicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
