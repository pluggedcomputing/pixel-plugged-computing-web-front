import { NgClass } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatrizService } from '../../services/matriz/matriz-service';

@Component({
  selector: 'app-save-matriz-color',
  standalone: true,
  imports: [NgClass],
  templateUrl: './save-matriz.html',
  styleUrl: './save-matriz.scss',
})
export class SaveMatrizColor {
  matrizService = inject(MatrizService);

  @Output() buttonClicked = new EventEmitter<string>();

  black: number = 0;
  white: number = 1;
  red: number = 2;
  blue: number = 3;
  green: number = 4;

  pallet: number[] = [0, 1, 2, 3, 4];

  color: number = 0;

  pixels: number[][] = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ];

  setColorPixel(indexLinha: number, indexPixel: number): void {
    this.pixels[indexLinha][indexPixel] = this.color;
  }

  setColor(color: number): void {
    this.color = color;
  }

  save(): void {
    this.matrizService.setMatriz(this.pixels);
  }

  onButtonClicked() {
    this.save();
    this.buttonClicked.emit('save');
  }
}
