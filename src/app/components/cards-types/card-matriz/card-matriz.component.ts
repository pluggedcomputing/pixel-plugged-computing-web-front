import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Exercice } from '../../../models/exercice.model';
import { Matriz } from '../../../models/matriz.model';
import { MatrizComponent } from '../../matriz/matriz';
import { AnswerHostComponent } from '../../answer-host/answer-host';

@Component({
  selector: 'app-card-matriz',
  standalone: true,
  templateUrl: './card-matriz.component.html',
  styleUrl: './card-matriz.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatrizComponent, AnswerHostComponent],
})
export class CardMatrizComponent {
  @Input() title: string | undefined;
  @Input() matriz?: Matriz | undefined;
  @Input() text: string | undefined;
  @Input() exercice: Exercice | undefined;
  @Output() buttonClickedCard = new EventEmitter<string>();

  onButtonClicked(value: string) {
    this.buttonClickedCard.emit(value);
  }
}
