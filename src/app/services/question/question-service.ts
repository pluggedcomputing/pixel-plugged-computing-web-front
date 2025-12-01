import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../../models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private readonly API = 'https://activities.a4s.dev.br/api/response';

  constructor(private httpClient: HttpClient) {}

  saveResponseQuestion(question: Question) {
    return this.httpClient.post<Question>(this.API, question);
  }
}
