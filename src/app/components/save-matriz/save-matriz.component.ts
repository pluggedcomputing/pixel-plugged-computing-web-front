import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatrizService } from '../../services/matriz/matriz-service';
import { NgClass } from '@angular/common';
import { MessagesService } from '../../services/messages/messages-service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-save-matriz',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './save-matriz.component.html',
  styleUrl: './save-matriz.component.scss',
})
export class SaveMatrizComponent {
  matrizService = inject(MatrizService);
  messagesService = inject(MessagesService);

  @Output() buttonClicked = new EventEmitter<string>();

  pixels: number[][] = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ];

  setColorPixel(indexLinha: number, indexPixel: number): void {
    this.pixels[indexLinha][indexPixel] =
      this.pixels[indexLinha][indexPixel] === 0 ? 1 : 0;
  }

  save(): void {
    this.matrizService.setMatriz(this.pixels);
  }

  onButtonClicked() {
    this.save();
    this.buttonClicked.emit('save');
  }
}
