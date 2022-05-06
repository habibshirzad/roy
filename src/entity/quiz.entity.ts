import { boolean } from "@hapi/joi";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity()
export class Quiz{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({
        default: 1,
        type:'boolean'
    })
    isActive: boolean;
     
    @OneToMany(() => Question, (question) => question.quiz )
    questions: Question[];
}