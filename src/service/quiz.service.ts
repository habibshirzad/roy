 import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from 'src/dto/CreateQuiz.dto';
import { Quiz } from '../entity/quiz.entity';
import { Repository } from "typeorm";


@Injectable()
export class QuizService {
  constructor( 
    @InjectRepository(Quiz) 
    private readonly quizRepository: Repository<Quiz>
  ){}

  async getAllQuiz() {
    return await this.quizRepository.find()
  }

  async getQuizById(id:number){
    return await this.quizRepository.findOne(id,{relations:['questions']})
  }

  async createNewQuiz(createQuizDto:CreateQuizDto){
    return await this.quizRepository.save(createQuizDto)
    
  }

  
}
