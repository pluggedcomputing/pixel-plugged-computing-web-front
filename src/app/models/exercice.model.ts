import { Matriz } from "./matriz.model";

export interface Exercice{
    type: string;
    matriz?: Matriz;
    answers: string[];
    correctAnswer: string;
}