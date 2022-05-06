

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionController } from '../controller/option.controller';
import { OptionService } from 'src/service/option.service';
import { QuizModule } from './quiz.module';
import { Option } from 'src/entity/option.entity';
import { QuestionModule } from './question.module';


@Module({
  imports: [
      TypeOrmModule.forFeature([Option]),
      
      QuestionModule
      
  ],
  controllers: [OptionController],
  providers: [OptionService, QuestionModule],
})
export class OptionModule {}
