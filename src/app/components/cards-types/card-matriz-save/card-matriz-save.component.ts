import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SaveMatrizComponent } from '../../save-matriz/save-matriz.component';

@Component({
  selector: 'app-card-matriz-save',
  standalone: true,
  templateUrl: './card-matriz-save.component.html',
  styleUrl: './card-matriz-save.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SaveMatrizComponent],
})
export class CardMatrizSaveComponent {
  @Input() title: string | undefined;
  @Input() text: string | undefined;
  @Output() buttonClickedCard = new EventEmitter<string>();

  onButtonClicked(value: string) {
    this.buttonClickedCard.emit(value);
  }
}
