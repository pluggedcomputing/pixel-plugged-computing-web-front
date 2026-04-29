import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { Exercice } from '../../models/exercice.model';
import { Matriz } from '../../models/matriz.model';
import { MatrizService } from '../../services/matriz/matriz-service';
import { CardTextComponent } from '../cards-types/card-text/card-text.component';
import { CardExerciceComponent } from '../cards-types/card-exercice/card-exercice.component';
import { CardExampleMatrizComponent } from '../cards-types/card-example-matriz/card-example-matriz.component';
import { CardQrcodeComponent } from '../cards-types/card-qrcode/card-qrcode.component';
import { CardMatrizComponent } from '../cards-types/card-matriz/card-matriz.component';
import { CardMatrizSaveComponent } from '../cards-types/card-matriz-save/card-matriz-save.component';
import { CardMatrizSaveColorComponent } from '../cards-types/card-matriz-save-color/card-matriz-save-color.component';
import { CardPaintColorExerciceComponent } from '../cards-types/card-paint-color-exercice/card-paint-color-exercice.component';
import { CardPaintExerciceComponent } from '../cards-types/card-paint-exercice/card-paint-exercice.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CardTextComponent,
    CardExerciceComponent,
    CardExampleMatrizComponent,
    CardQrcodeComponent,
    CardMatrizComponent,
    CardMatrizSaveComponent,
    CardMatrizSaveColorComponent,
    CardPaintColorExerciceComponent,
    CardPaintExerciceComponent,
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnChanges {
  @Input() type: string | undefined;
  @Input() title: string | undefined;
  @Input() imgUrl?: string | undefined;
  @Input() text: string | undefined;
  @Input() exercice?: Exercice | undefined;
  @Input() qrCode?: string | undefined;
  @Input() matriz?: Matriz | undefined;
  @Output() buttonClickedCard = new EventEmitter<string>();

  matrizService = inject(MatrizService);
  containerClass = '';
  answers: string[] = [];
  correctAnswer: string = '';

  ngOnChanges() {
    this.updateAnswers();
    this.containerClass = this.type ?? '';
  }

  onButtonClicked(value: string) {
    this.buttonClickedCard.emit(value);
  }

  updateAnswers() {
    if (this.type?.startsWith('screenPaint')) {
      this.answers = [...this.matrizService.getAnwers()];
      this.correctAnswer = this.matrizService.getResponse();
    } else {
      this.answers = this.exercice?.answers ?? [];
      this.correctAnswer = this.exercice?.correctAnswer ?? '';
    }
  }
}
