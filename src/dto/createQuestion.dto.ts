import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


export class CreateQuestionDto{

    @Column()
    question: string;

    @Column()
    quizId: number;
}