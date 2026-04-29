import { Component, inject, Input, OnInit, Output } from '@angular/core';
import { CardComponent } from '../card/card';
import { MessagesService } from '../../services/messages/messages-service';
import { CommonModule, NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Card } from '../../models/card.model';
import { Congratulations } from '../congratulations/congratulations';
import { ExitButtonComponent } from '../buttons/exit-button/exit-button';
import { ExitButtonBlueComponent } from '../buttons/exit-button-blue/exit-button-blue';
import { QuestionService } from '../../services/question/question-service';
import { SessionStorageService } from '../../services/session-storage/session-storage-service';
import { Question } from '../../models/question.model';
import { Matriz } from '../../models/matriz.model';
import { Matrizes } from '../../../assets/data/matrizesForLevels';
import { MatrizService } from '../../services/matriz/matriz-service';

@Component({
  selector: 'app-card-host',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    MatIconModule,
    NgClass,
    Congratulations,
    ExitButtonComponent,
    ExitButtonBlueComponent,
  ],
  templateUrl: './card-host.html',
  styleUrl: './card-host.scss',
})
export class CardHostComponent implements OnInit {
  private questionService = inject(QuestionService);
  private sessionStorageService = inject(SessionStorageService);
  private messagesService = inject(MessagesService);
  private matrizService = inject(MatrizService);

  cards: Card[] = [];
  currentMatriz?: Matriz;
  currentCard?: Card;
  index = 0;
  loading: boolean = false;

  @Input() level: string | undefined;

  matrizes: Matriz[] = [];

  constructor() {
    const m = new Matrizes();
    this.matrizes = m.getAll();
  }

  ngOnInit(): void {
    this.messagesService
      .getMessages('level' + this.level + '.screens')
      .subscribe((messages) => {
        this.cards = messages;
        this.updateCurrentCard();
      });
  }

  updateCurrentCard() {
    this.currentCard = this.cards[this.index];
    this.currentMatriz = this.matrizes.find(
      (m) => m.id === this.currentCard?.idMatriz,
    );
  }

  prevCard() {
    if (this.loading) return;

    this.loading = true;

    if (this.isNotFirstScreen()) {
      this.index--;
      this.updateCurrentCard();
    }

    setTimeout(() => (this.loading = false), 500);
  }

  nextCard() {
    if (this.loading) return;

    this.loading = true;

    if (this.isNotLastScreen() && this.isNotScreenExercice()) {
      this.index++;
      this.updateCurrentCard();
    }

    setTimeout(() => (this.loading = false), 500);
  }

  private isNotFirstScreen() {
    return this.index > 0;
  }

  private isNotLastScreen() {
    return this.index < this.cards.length - 1;
  }

  private isNotScreenExercice() {
    switch (this.currentCard?.type) {
      case 'screenExercice':
        return false;
      case 'screenMatrizExercice':
        return false;
      case 'screenSaveMatriz':
        return false;
      case 'screenSaveMatrizColor':
        return false;
      case 'screenPaintExercice':
        return false;
      case 'screenPaintColorExercice':
        return false;
      default:
        return true;
    }
  }

  verifyAnswer(value: string) {
    if (
      this.currentCard?.type === 'screenSaveMatriz' ||
      this.currentCard?.type === 'screenSaveMatrizColor'
    ) {
      setTimeout(() => {
        this.index++;
        this.updateCurrentCard();
      }, 500);

      return;
    }

    if (
      this.currentCard?.type === 'screenPaintColorExercice' ||
      this.currentCard?.type === 'screenPaintExercice'
    ) {
      const correct = this.matrizService.getLinhaMatriz(1);

      const isCorrect = value === correct;

      this.sendResponseToActivies(value, isCorrect);

      if (isCorrect && this.isNotLastScreen()) {
        setTimeout(() => {
          (this.index++, this.updateCurrentCard());
        }, 1000);
      }

      return;
    }

    if (
      value === this.currentCard?.exercice?.correctAnswer &&
      this.isNotLastScreen()
    ) {
      this.sendResponseToActivies(value, true);
      setTimeout(() => {
        {
          (this.index++, this.updateCurrentCard());
        }
      }, 1000);
    } else {
      this.sendResponseToActivies(value, false);
    }
  }

  remakeLevel(value: string) {
    if (value === 'Remake' || value === 'Refazer') {
      this.index = 0;
      this.updateCurrentCard();
    }
  }

  sendResponseToActivies(response: string, value: boolean): void {
    const userID: string = this.sessionStorageService.getItem('userID');
    const idApp: string = 'PIXEL-WEB 2.0';
    const phase: string = this.level || '';
    const activity: string =
      this.cards[this.index].exercice?.numberExercice || '';
    const userResponse: string = response;
    const expectedResponse: string =
      this.cards[this.index].exercice?.correctAnswer || '';
    const isCorrect: boolean = value;
    const dateResponse: Date = new Date();
    const typeOfQuestion: string = this.cards[this.index].exercice?.type || '';

    const question = new Question(
      userID,
      idApp,
      phase,
      activity,
      userResponse,
      expectedResponse,
      isCorrect,
      dateResponse,
      typeOfQuestion,
    );

    this.questionService.saveResponseQuestion(question).subscribe({
      next: (res) => console.log('Resposta enviada com sucesso:', res),
      error: (err) => console.error('Erro ao enviar resposta:', err),
    });
  }
}
