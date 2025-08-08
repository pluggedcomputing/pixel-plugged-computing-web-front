import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'app-qr-code',
  standalone: true,
  imports: [],
  templateUrl: './qr-code.html',
  styleUrl: './qr-code.scss',
})
export class QrCode implements AfterViewInit, OnChanges {
  @ViewChild('qrCanvas') private canvas!: ElementRef<HTMLCanvasElement>;

  @Input({ required: true }) textQrCode: string | undefined;

  ngAfterViewInit(): void {
    this.getQrCode();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['textQrCode'] && !changes['textQrCode'].isFirstChange()) {
      this.getQrCode();
    }
  }
  private getQrCode(): void {
    if (!this.textQrCode) {
      return;
    }
    QRCode.toCanvas(this.canvas.nativeElement, this.textQrCode, (error) => {
      if (error) {
        console.error('Erro ao gerar o QR Code', error);
      } else {
        console.log('QR Code gerado comsucesso!');
      }
    });
  }
}
