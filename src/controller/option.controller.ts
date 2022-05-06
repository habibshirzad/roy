import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateQuestionDto } from "src/dto/createQuestion.dto";
import { OptionService } from "src/service/option.service";
import { QuestionService } from "src/service/question.service";
import { CreateOptionDto } from "src/dto/createOption.dto";
import { get } from "http";



@Controller('question/option')
export class OptionController{
    constructor(
        private readonly optionService: OptionService,
        private readonly questionService: QuestionService
    ){}


   

    @Post()
    async saveOptionToQuestion(@Body() createOptionDto:CreateOptionDto){
        const question = await this.questionService.getQuestionById(
            createOptionDto.questionId

        )
        return {question, createOptionDto}
    }

        


}


