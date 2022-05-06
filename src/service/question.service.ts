import { options } from "@hapi/joi";
import { Body, Inject, Injectable, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { create } from "domain";
import { retry } from "rxjs";
import { CreateQuestionDto } from "src/dto/createQuestion.dto";
import { Question } from "src/entity/question.entity";
import { Quiz } from "src/entity/quiz.entity";
import { Repository } from "typeorm";



@Injectable()
export class QuestionService{
    constructor(
        @InjectRepository(Question)
        private readonly questionRepository:Repository<Question>
    ){}


    async createQuestion( createQuestionDto:CreateQuestionDto,quiz:Quiz){
        const newQuestion =  await this.questionRepository.save({ 
            ...createQuestionDto,
            quiz:quiz
        })

        await this.questionRepository.save(newQuestion)
        return newQuestion;
    }

    async getQuestionById(id:number){
        return await this.questionRepository.findOne(id,{relations:['options','quiz']})


    }
}