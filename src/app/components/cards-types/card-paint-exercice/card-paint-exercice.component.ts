import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatrizActivityComponent } from "../../matriz-activity/matriz-activity.component";
import { AnswerHostComponent } from "../../answer-host/answer-host";

@Component({
  selector: 'app-card-paint-exercice',
  standalone: true,
  templateUrl: './card-paint-exercice.component.html',
  styleUrl: './card-paint-exercice.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatrizActivityComponent, AnswerHostComponent]
})
export class CardPaintExerciceComponent {
  @Input() title: string | undefined;
  @Input() text: string | undefined;
  @Input() answers: string[] | undefined;
  @Input() correctAnswer: string | undefined;
  @Output() buttonClickedCard = new EventEmitter<string>();

  onButtonClicked(value: string) {
    this.buttonClickedCard.emit(value);
  }
}
