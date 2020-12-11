import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswersModule } from './answers/answers.module';
import { typeOrmConfig } from './config/typeorm.config';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AnswersModule],
})
export class AppModule {}
