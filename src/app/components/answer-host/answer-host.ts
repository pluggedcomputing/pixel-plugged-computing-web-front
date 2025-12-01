import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['answerList'] && this.answerList) {
      this.shuffleAnswers();
    }
  }

  shuffleAnswers() {
    if (!this.answerList) return;
    this.answerList = [...this.answerList].sort(() => Math.random() - 0.5);
  }

  onButtonClicked(value: string) {
    this.buttonClicked.emit(value);
  }
}
