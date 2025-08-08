import { Component, signal } from '@angular/core';
import { ExitButton } from '../../../components/buttons/exit-button/exit-button';
import { QrCode } from '../../../components/qr-code/qr-code';
import { CardHost } from '../../../components/card-host/card-host';

@Component({
  selector: 'app-level-5',
  standalone: true,
  imports: [ExitButton, QrCode, CardHost],
  templateUrl: './level-5.html',
  styleUrl: './level-5.scss',
})
export class Level5 {
  level: string = '5';

  // Qr Code

  // text = signal('');
  // updateText(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   this.text.set(input.value);
  // }
}
