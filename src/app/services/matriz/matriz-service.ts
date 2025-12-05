import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatrizService {
  private matriz: boolean[][] = [];
  private matrizColor: number[][] = [];

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

  getMatrizColor(): number[][] {
    return this.matrizColor;
  }

  setMatrizColor(matriz: number[][]) {
    this.matrizColor = matriz;
  }

  getLinhaMatrizColor(numero_linha: number): string {
    const linha = this.matrizColor[numero_linha - 1];
    return this.getLinhaMatrizColorToString(linha);
  }

  getLinhaMatrizColorToString(input: number[]): string {
    let result = '';
    let count = 1;

    for (let i = 0; i < input.length; i++) {
      if (input[i] === input[i + 1]) {
        count++;
      } else {
        result += `${count}-${input[i]},`;
        count = 1;
      }
    }

    return result.slice(0, -1);
  }
}
