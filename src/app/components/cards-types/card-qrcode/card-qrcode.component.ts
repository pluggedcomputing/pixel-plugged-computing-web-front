import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { QrCodeActivityComponent } from '../../qr-code-activity/qr-code-activity';

@Component({
  selector: 'app-card-qrcode',
  standalone: true,
  templateUrl: './card-qrcode.component.html',
  styleUrl: './card-qrcode.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [QrCodeActivityComponent],
})
export class CardQrcodeComponent {
  @Input() title: string | undefined;
  @Input() text: string | undefined;
  @Input() qrCode?: string | undefined;
}
