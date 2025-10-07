import { Component, Input, signal } from '@angular/core';
import { QrCodeComponent } from '../qr-code/qr-code';

@Component({
  selector: 'app-qr-code-activity',
  standalone: true,
  imports: [QrCodeComponent],
  templateUrl: './qr-code-activity.html',
  styleUrl: './qr-code-activity.scss',
})
export class QrCodeActivityComponent {
  @Input() placeHolder: string | undefined;

  text = signal('');
  updateText(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.text.set(input.value);
  }
}
