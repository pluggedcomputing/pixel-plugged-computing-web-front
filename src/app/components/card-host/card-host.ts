import { Component, inject, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card';
import { MessagesService } from '../../services/messages/messages-service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-host',
  standalone: true,
  imports: [CardComponent, CommonModule, MatIconModule],
  templateUrl: './card-host.html',
  styleUrl: './card-host.scss',
})
export class CardHostComponent implements OnInit {
  private messagesService = inject(MessagesService);
  cards: CardComponent[] = [];
  index = 0;

  @Input() level: string | undefined;

  ngOnInit(): void {
    this.messagesService
      .getMessages('level' + this.level + '.screens')
      .subscribe((messages) => {
        this.cards = messages;
      });
  }

  nextCard() {
    if (this.index < this.cards.length - 1) {
      this.index = this.index + 1;
    }
  }

  prevCard() {
    if (this.index > 0) {
      this.index = this.index - 1;
    }
  }
}
