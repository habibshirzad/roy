import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from 'src/dto/CreateQuiz.dto';
import { QuizService } from 'src/service/quiz.service';

@Controller('quiz')
export class QuizController {
  constructor ( 
    private readonly quizService: QuizService
  ) {}

  @Get()
  async getAllQuiz() {
    return await this.quizService.getAllQuiz();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData:CreateQuizDto){
      return await this.quizService.createNewQuiz(quizData)

  }
}
