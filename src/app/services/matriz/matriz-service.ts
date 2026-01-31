import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatrizService {
  private matriz: number[][] = [];
  private rows: string[] = [];
  private response: string = '';

  setMatriz(matriz: number[][]) {
    this.matriz = matriz;
  }

  getMatriz(): number[][] {
    return this.matriz;
  }

  setRows(rows: string[]) {
    this.rows = rows;
  }

  getRows(): string[] {
    return this.rows;
  }

  setResponse(response: string) {
    this.response = response;
  }

  getResponse(): string {
    return this.response;
  }

  getLinhaMatriz(numero_linha: number): string {
    const linha = this.matriz[numero_linha - 1];
    return this.toString(linha);
  }

  toString(input: number[]): string {
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
