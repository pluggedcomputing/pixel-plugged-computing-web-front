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
    let response: string = '';
    let answers: string[] = ['1-2,3-3,1-1', '4-4,1-3', '1-2,2-0,2-4'];

    this.matrizService.setMatriz(this.pixels);
    response = this.matrizService.getLinhaMatriz(1);

    // verifica se já existe a alternativa correta
    answers.push(answers.includes(response) ? '3-1,2-2' : response);
    this.matrizService.setResponse(response);
    this.matrizService.setAnwers(answers);  }

  onButtonClicked() {
    this.save();
    this.buttonClicked.emit('save');
  }
}
