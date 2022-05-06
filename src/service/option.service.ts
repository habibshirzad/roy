import { options } from "@hapi/joi";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateOptionDto } from "src/dto/createOption.dto";
import { CreateQuestionDto } from "src/dto/createQuestion.dto";
import { Option } from "src/entity/option.entity";
import { Question } from "src/entity/question.entity";
import { Repository } from "typeorm";



@Injectable()
export class OptionService{
    constructor(
        @InjectRepository(Option)
        private readonly optionRepository: Repository<Option>
    ){}

    // async saveOptionToQuestion(createOptionDto:CreateOptionDto){
    //     const option = await this.optionRepository.create(createOptionDto)
    //     await this.optionRepository.save(option)
    //     return option
    // }

    async createOption(createOptionDto:CreateOptionDto, question:Question){
        const newOption = await this.optionRepository.save({
            ...createOptionDto,
            question:question
        });
        return newOption
    
    }
}