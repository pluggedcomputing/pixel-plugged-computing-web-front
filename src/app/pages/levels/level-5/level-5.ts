import { Component, signal } from '@angular/core';
import { ExitButtonComponent } from '../../../components/buttons/exit-button/exit-button';
import { QrCodeComponent } from '../../../components/qr-code/qr-code';
import { CardHostComponent } from '../../../components/card-host/card-host';

@Component({
  selector: 'app-level-5',
  standalone: true,
  imports: [ExitButtonComponent, CardHostComponent], //QrCode
  templateUrl: './level-5.html',
  styleUrl: './level-5.scss',
})
export class Level5Component {
  level: string = '5';

  // Qr Code

  // text = signal('');
  // updateText(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   this.text.set(input.value);
  // }
}
