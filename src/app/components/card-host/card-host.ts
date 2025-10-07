import { Component, inject, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card';
import { MessagesService } from '../../services/messages/messages-service';
import { CommonModule, NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Card } from '../../models/card.model';
import { Congratulations } from '../congratulations/congratulations';

@Component({
  selector: 'app-card-host',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    MatIconModule,
    NgClass,
    Congratulations,
  ],
  templateUrl: './card-host.html',
  styleUrl: './card-host.scss',
})
export class CardHostComponent implements OnInit {
  private messagesService = inject(MessagesService);
  cards: Card[] = [];
  index = 0;

  @Input() level: string | undefined;

  ngOnInit(): void {
    this.messagesService
      .getMessages('level' + this.level + '.screens')
      .subscribe((messages) => {
        this.cards = messages;
      });
  }

  prevCard() {
    if (this.isNotFirstScreen()) {
      this.index = this.index - 1;
    }
  }

  nextCard() {
    if (this.isNotLastScreen() && this.isNotScreenExercice()) {
      this.index = this.index + 1;
    }
  }

  private isNotFirstScreen() {
    return this.index > 0;
  }

  private isNotLastScreen() {
    return this.index < this.cards.length - 1;
  }

  private isNotScreenExercice() {
    return this.cards[this.index].type !== 'screenExercice';
  }

  verifyAnswer(value: string) {
    if (value === 'correct' && this.isNotLastScreen()) {
      setTimeout(() => {
        this.index = this.index + 1;
      }, 1000);
    }
  }
}
