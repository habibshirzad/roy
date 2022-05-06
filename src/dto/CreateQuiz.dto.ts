
import { IsNotEmpty } from "class-validator";
import { Column, Entity } from "typeorm";

@Entity()
export class CreateQuizDto{

    @IsNotEmpty({message:'should not be empty'})
    @Column()
    title: string;

    @Column()
    description: string
}