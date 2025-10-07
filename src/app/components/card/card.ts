import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Exercice } from '../../models/exercice.model';
import { AnswerHostComponent } from '../answer-host/answer-host';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [AnswerHostComponent, NgClass],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class CardComponent {
  @Input() type: string | undefined;
  @Input() title: string | undefined;
  @Input() imgUrl?: string | undefined;
  @Input() text: string | undefined;
  @Input() exercice?: Exercice | undefined;
  @Output() buttonClickedCard = new EventEmitter<string>();

  onButtonClicked(value: string) {
    this.buttonClickedCard.emit(value);
  }
}
