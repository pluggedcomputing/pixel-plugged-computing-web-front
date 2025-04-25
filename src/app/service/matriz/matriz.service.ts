import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatrizService {
  private matrizPintada: boolean[][] = [];
  private matrizColorida: string[][] = [];

  salvarMatrizPintada(matriz: boolean[][]) {
    this.matrizPintada = matriz;
  }

  salvarMatrizCorolida(matriz: string[][]) {
    this.matrizColorida = matriz;;
  }

  obterMatrizPintada(): boolean[][] {
    return this.matrizPintada;
  }

  obterMatrizColorida(): string[][] {
    return this.matrizColorida;
  }

  // Retornar linha como string
  obterLinhaComoString(numero_linha: number): string {
    return this.runLegthCoding(this.matrizPintada[numero_linha - 1].map(cell => cell ? '0' : '1').join(","));
  }

  runLegthCoding(linha: string){
    // Divide a string em um array de números
    const pixels = linha.split(',').map(Number);
    
    // Inicializa o resultado e o contador
    let result = '';
    let count = 1;
    
    // Percorre o array de pixels
    for (let i = 0; i < pixels.length; i++) {
      // Verifica se o próximo pixel é igual ao atual
      if (pixels[i] === pixels[i + 1]) {
        count++; // Incrementa o contador se for igual
      } else {
        // Adiciona a contagem e o valor ao resultado
        result += `${count},`;
        count = 1; // Reseta o contador
      }
    }

    if(pixels[0] == 0){
      result = '0,' + result;
    }
    
    // Remove a vírgula final e retorna o resultado
    return result.slice(0, -1);
  }

  // Matriz colorida
  
  obterLinhaComoStringColorida(numero_linha: number): string {
    return  this.runLengthEncode(this.mapColorsToNumbers(this.matrizColorida[numero_linha - 1].join(",")));
  }

  mapColorsToNumbers(input: string): string {
    // Define um mapa de cores para números
    const colorMap: { [key: string]: number } = {
      'black': 0,
      'white': 1,
      'red': 2,
      'green': 3,
      'blue': 4
    };

    // Divide a string de entrada em um array de cores
    const colors = input.split(',');

    // Mapeia cada cor para o número correspondente
    const numbers = colors.map(color => colorMap[color]);

    // Junta os números em uma string separada por vírgulas
    return numbers.join(',');
  }

  runLengthEncode(input: string): string {
    // Divide a string em um array de números
    const pixels = input.split(',').map(Number);
    
    // Inicializa o resultado e o contador
    let result = '';
    let count = 1;
    
    // Percorre o array de pixels
    for (let i = 0; i < pixels.length; i++) {
      // Verifica se o próximo pixel é igual ao atual
      if (pixels[i] === pixels[i + 1]) {
        count++; // Incrementa o contador se for igual
      } else {
        // Adiciona a contagem e o valor ao resultado
        result += `${count}-${pixels[i]},`;
        count = 1; // Reseta o contador
      }
    }
    
    // Remove a vírgula final e retorna o resultado
    return result.slice(0, -1);
  }

}