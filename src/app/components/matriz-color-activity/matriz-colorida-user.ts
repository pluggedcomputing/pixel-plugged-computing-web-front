import { NgClass } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatrizService } from '../../services/matriz/matriz-service';

@Component({
  selector: 'app-matriz-color-activity',
  standalone: true,
  imports: [NgClass],
  templateUrl: './matriz-colorida-user.html',
  styleUrl: './matriz-colorida-user.scss',
})
export class MatrizColorActivityComponent {
  @Output() buttonClicked = new EventEmitter<string>();
  @Input() text: string | undefined;

  correct!: string;
  answers!: string[];
  rows!: string[];
  pixels!: number[][];

  matrizService = inject(MatrizService);

  ngOnInit() {
    this.pixels = this.matrizService.getMatriz();
    this.correct = this.matrizService.getResponse();
    this.rows = [
      '?',
      this.matrizService.getLinhaMatriz(2),
      this.matrizService.getLinhaMatriz(3),
      this.matrizService.getLinhaMatriz(4),
      this.matrizService.getLinhaMatriz(5),
    ];
  }

  black: number = 0;
  white: number = 1;
  red: number = 2;
  blue: number = 3;
  green: number = 4;

  pallet: number[] = [0, 1, 2, 3, 4];

  color: number = 0;

  onButtonClicked(value: string) {
    this.buttonClicked.emit(value);
  }
}
