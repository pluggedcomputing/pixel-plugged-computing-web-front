import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NotificationComponent } from '../../notification/notification';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button-answer',
  standalone: true,
  imports: [NotificationComponent, NgClass],
  templateUrl: './button-answer.html',
  styleUrl: './button-answer.scss',
})
export class ButtonAnswerComponent {
  @ViewChild(NotificationComponent) notification!: NotificationComponent;

  type: string = '';
  private block = false;
  private isFirstResponse = true;

  @Input() answer: string | undefined;
  @Input() correctAnswer: string | undefined;
  @Output() clicked = new EventEmitter<string>();

  response() {
    if (!this.block) {
      this.buttonType();
      this.showNotification();
    }
  }

  private isCorrect() {
    return this.answer === this.correctAnswer;
  }

  private buttonType() {
    this.type = this.isCorrect() ? 'correct' : 'incorrect';
    if (this.isFirstResponse) {
      this.saveFirstResponse(this.type);
      this.isFirstResponse = false;
    }
    this.clicked.emit(this.answer);
    this.block = true;
    setTimeout(() => {
      this.type = '';
      this.block = false;
    }, 1500);
  }

  private showNotification() {
    if (this.isCorrect()) {
      this.notification.correctNotification();
    } else {
      this.notification.incorrectNotification();
    }
  }

  saveFirstResponse(response: string): void {
    const responsesUser = JSON.parse(
      localStorage.getItem('responsesUser') || '[]'
    );
    responsesUser.push(response);
    localStorage.setItem('responsesUser', JSON.stringify(responsesUser));
  }
}
