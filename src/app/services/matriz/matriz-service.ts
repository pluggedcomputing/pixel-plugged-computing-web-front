import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatrizService {
  private matriz: number[][] = [];
  private matrizColor: number[][] = [];

  setMatriz(matriz: number[][]) {
    this.matriz = matriz;
  }

  getMatriz(): number[][] {
    return this.matriz;
  }

  getLinhaMatriz(numero_linha: number): string {
    const linha = this.matriz[numero_linha - 1];
    return this.getLinhaMatrizColorToString(linha);
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
