import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AnswerHostComponent } from '../../answer-host/answer-host';
import { Exercice } from '../../../models/exercice.model';

@Component({
  selector: 'app-card-exercice',
  standalone: true,
  templateUrl: './card-exercice.component.html',
  styleUrl: './card-exercice.component.scss',
  imports: [AnswerHostComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardExerciceComponent {
  @Input() title: string | undefined;
  @Input() imgUrl?: string | undefined;
  @Input() text: string | undefined;
  @Input() exercice: Exercice | undefined;
  @Output() buttonClickedCard = new EventEmitter<string>();

  onButtonClicked(value: string) {
    this.buttonClickedCard.emit(value);
  }
}
