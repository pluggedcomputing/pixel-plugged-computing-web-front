import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatrizColorActivityComponent } from '../../matriz-color-activity/matriz-colorida-user';
import { AnswerHostComponent } from '../../answer-host/answer-host';

@Component({
  selector: 'app-card-paint-color-exercice',
  standalone: true,
  templateUrl: './card-paint-color-exercice.component.html',
  styleUrl: './card-paint-color-exercice.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatrizColorActivityComponent, AnswerHostComponent],
})
export class CardPaintColorExerciceComponent {
  @Input() title: string | undefined;
  @Input() text: string | undefined;
  @Input() answers: string[] | undefined;
  @Input() correctAnswer: string | undefined;
  @Output() buttonClickedCard = new EventEmitter<string>();

  onButtonClicked(value: string) {
    this.buttonClickedCard.emit(value);
  }
}
