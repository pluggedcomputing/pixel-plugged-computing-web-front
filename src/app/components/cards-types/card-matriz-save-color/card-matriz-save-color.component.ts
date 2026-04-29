import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { SaveMatrizColor } from "../../save-matriz-color/save-matriz";

@Component({
  selector: 'app-card-matriz-save-color',
  standalone: true,
  templateUrl: './card-matriz-save-color.component.html',
  styleUrl: './card-matriz-save-color.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SaveMatrizColor],
})
export class CardMatrizSaveColorComponent {
  @Input() title: string | undefined;
  @Input() text: string | undefined;
  @Output() buttonClickedCard = new EventEmitter<string>();

  onButtonClicked(value: string) {
    this.buttonClickedCard.emit(value);
  }
}
