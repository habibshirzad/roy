import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizModule } from './module/quiz.module';
import * as Joi from '@hapi/Joi'
import { DatabaseModule } from './module/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { QuestionModule } from './module/question.module';
import { QuizService } from './service/quiz.service';
import { OptionModule } from './module/option.module';


@Module({
  imports: [
    ConfigModule.forRoot({
    validationSchema: Joi.object({
      POSTGRES_HOST: Joi.string().required(),
      POSTGRES_PORT: Joi.number().required(),
      POSTGRES_USER: Joi.string().required(),
      POSTGRES_PASSWORD: Joi.string().required(),
      POSTGRES_DB: Joi.string().required(),
      PORT: Joi.number()
    }),
  }),

  QuizModule,
  QuestionModule,
  OptionModule,
  DatabaseModule,
],  
  controllers: [],
  providers: [],
  
})
export class AppModule {}
