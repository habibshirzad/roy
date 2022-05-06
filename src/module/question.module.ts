

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from 'src/controller/question.controller';
import { QuizController } from 'src/controller/quiz.controller';
import { Question } from 'src/entity/question.entity';
import { Quiz } from 'src/entity/quiz.entity';
import { QuestionService } from 'src/service/question.service';
import { QuizService } from 'src/service/quiz.service';
import { QuizModule } from './quiz.module';


@Module({
  imports: [
      TypeOrmModule.forFeature([Question]),
      QuizModule
      
  ],
  exports: [QuestionService],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
