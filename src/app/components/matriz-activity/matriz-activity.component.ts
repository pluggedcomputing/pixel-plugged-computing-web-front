import { Component, inject } from '@angular/core';
import { MatrizService } from '../../services/matriz/matriz-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-matriz-activity',
  standalone: true,
  imports: [NgClass],
  templateUrl: './matriz-activity.component.html',
  styleUrl: './matriz-activity.component.scss',
})
export class MatrizActivityComponent {
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
}
