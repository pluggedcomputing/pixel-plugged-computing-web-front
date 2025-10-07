import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatrizService {
  private matriz: boolean[][] = [];
  private matrizColor: string[][] = [];

  setMatriz(matriz: boolean[][]) {
    this.matriz = matriz;
  }

  getMatriz(): boolean[][] {
    return this.matriz;
  }

  getLinhaMatriz(numberLine: number): string {
    return this.getLinhaMatrizToString(
      this.matriz[numberLine - 1].map((cell) => (cell ? '0' : '1')).join(',')
    );
  }

  getLinhaMatrizToString(linha: string) {
    const pixels = linha.split(',').map(Number);

    let result = '';
    let count = 1;

    for (let i = 0; i < pixels.length; i++) {
      if (pixels[i] === pixels[i + 1]) {
        count++;
      } else {
        result += `${count},`;
        count = 1;
      }
    }

    if (pixels[0] == 0) {
      result = '0,' + result;
    }

    return result.slice(0, -1);
  }

  // Matriz colorida

  getMatrizColor(): string[][] {
    return this.matrizColor;
  }

  setMatrizColor(matriz: string[][]) {
    this.matrizColor = matriz;
  }

  getLinhaMatrizColor(numero_linha: number): string {
    return this.getLinhaMatrizColorToString(
      this.mapColorsToNumbers(this.matrizColor[numero_linha - 1].join(','))
    );
  }

  mapColorsToNumbers(input: string): string {
    const colorMap: { [key: string]: number } = {
      black: 0,
      white: 1,
      red: 2,
      green: 3,
      blue: 4,
    };

    const colors = input.split(',');

    const numbers = colors.map((color) => colorMap[color]);

    return numbers.join(',');
  }

  getLinhaMatrizColorToString(input: string): string {
    const pixels = input.split(',').map(Number);

    let result = '';
    let count = 1;

    for (let i = 0; i < pixels.length; i++) {
      if (pixels[i] === pixels[i + 1]) {
        count++;
      } else {
        result += `${count}-${pixels[i]},`;
        count = 1;
      }
    }

    return result.slice(0, -1);
  }
}
