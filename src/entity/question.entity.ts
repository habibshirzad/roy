import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Option } from "./option.entity";
import { Quiz } from "./quiz.entity";


@Entity()
export class Question{

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    question: string;

    @ManyToOne(() => Quiz, (quiz) => quiz.questions)
    @JoinColumn()
    quiz: Quiz


    @OneToMany(() => Option, (option) => option.question)
    options: Option[];
}