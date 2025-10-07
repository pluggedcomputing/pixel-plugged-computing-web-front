import { Component, inject, Input } from '@angular/core';
import { MatrizService } from '../../services/matriz/matriz-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-matriz',
  standalone: true,
  imports: [NgClass],
  templateUrl: './matriz.html',
  styleUrl: './matriz.scss',
})
export class MatrizComponent {
  private matrizService = inject(MatrizService);

  @Input() rows: string[] | undefined;
  @Input() pixels: number[][] | undefined;

  @Input() matrizcolorida: string[][] = [];
  @Input() isColor: boolean = false;

  private colorList: string[] = ['black', 'white', 'red', 'green', 'blue'];
  private color: string = 'white';

  setColor(color: string): void {
    this.color = color;
  }

  setColorPixel(indexLinha: number, indexPixel: number): void {
    if (!this.pixels || !this.pixels[indexLinha]) return;
    this.pixels[indexLinha][indexPixel] =
      this.pixels[indexLinha][indexPixel] === 0 ? 1 : 0;
  }

  paintPixel(rowIndex: number, cellIndex: number): void {
    this.matrizcolorida[rowIndex][cellIndex] = this.color;
  }
}
