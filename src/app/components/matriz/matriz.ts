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
  @Input() rows: string[] | undefined;
  @Input() pixels: number[][] | undefined;
  @Input() isPaint: boolean | undefined;

  setColorPixel(indexLinha: number, indexPixel: number): void {
    if (!this.pixels || !this.pixels[indexLinha]) return;
    if (this.isPaint) {
      this.pixels[indexLinha][indexPixel] =
        this.pixels[indexLinha][indexPixel] === 0 ? 1 : 0;
    }
  }
}
