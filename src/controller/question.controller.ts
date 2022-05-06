import { Body, Controller, Post } from "@nestjs/common";
import { CreateQuestionDto } from "src/dto/createQuestion.dto";
import { QuestionService } from "src/service/question.service";
import { QuizService } from "src/service/quiz.service";




@Controller('question')
export class QuestionController{
    constructor (
        private readonly questionService: QuestionService,
        private readonly quizService: QuizService,
    ){}


// take the quiz id using quiz service save it into a variable and add it to question dto then crt a question using that id
    @Post()
    async createQuestion(@Body() createQuestionDto:CreateQuestionDto){
        const quiz = await this.quizService.getQuizById(createQuestionDto.quizId);
        return await this.questionService.createQuestion(createQuestionDto,quiz);

    }
}