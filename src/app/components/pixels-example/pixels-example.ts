import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pixels-example',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pixels-example.html',
  styleUrl: './pixels-example.scss',
})
export class PixelsExample {
  pixels: number[][] = [[1, 1, 1, 1, 1]];

  setColorPixel(indexLinha: number, indexPixel: number): void {
    if (!this.pixels || !this.pixels[indexLinha]) return;
    this.pixels[indexLinha][indexPixel] =
      this.pixels[indexLinha][indexPixel] === 0 ? 1 : 0;
  }
}
