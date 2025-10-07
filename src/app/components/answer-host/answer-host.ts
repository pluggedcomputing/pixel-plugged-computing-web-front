import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonAnswerComponent } from '../buttons/button-answer/button-answer';

@Component({
  selector: 'app-answer-host',
  standalone: true,
  imports: [ButtonAnswerComponent],
  templateUrl: './answer-host.html',
  styleUrl: './answer-host.scss',
})
export class AnswerHostComponent {
  @Input() answerList: string[] | undefined;
  @Input() correctAnswer: string | undefined;
  @Output() buttonClicked = new EventEmitter<string>();

  onButtonClicked(value: string) {
    this.buttonClicked.emit(value);
  }
}
