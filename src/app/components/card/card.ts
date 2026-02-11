import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Exercice } from '../../models/exercice.model';
import { AnswerHostComponent } from '../answer-host/answer-host';
import { NgClass } from '@angular/common';
import { MatrizComponent } from '../matriz/matriz';
import { QrCodeActivityComponent } from '../qr-code-activity/qr-code-activity';
import { PixelsExample } from '../pixels-example/pixels-example';
import { Matriz } from '../../models/matriz.model';
import { SaveMatrizColor } from '../save-matriz-color/save-matriz';
import { MatrizColorActivityComponent } from '../matriz-color-activity/matriz-colorida-user';
import { SaveMatrizComponent } from '../save-matriz/save-matriz.component';
import { MatrizActivityComponent } from '../matriz-activity/matriz-activity.component';
import { MatrizService } from '../../services/matriz/matriz-service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    AnswerHostComponent,
    NgClass,
    MatrizComponent,
    QrCodeActivityComponent,
    PixelsExample,
    SaveMatrizColor,
    MatrizColorActivityComponent,
    SaveMatrizComponent,
    MatrizActivityComponent,
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class CardComponent {
  @Input() type: string | undefined;
  @Input() title: string | undefined;
  @Input() imgUrl?: string | undefined;
  @Input() text: string | undefined;
  @Input() exercice: Exercice | undefined;
  @Input() qrCode?: string | undefined;
  @Input() matriz?: Matriz | undefined;
  @Output() buttonClickedCard = new EventEmitter<string>();
 
  
  matrizService = inject(MatrizService);

  onButtonClicked(value: string) {
    this.buttonClickedCard.emit(value);
  }
}
