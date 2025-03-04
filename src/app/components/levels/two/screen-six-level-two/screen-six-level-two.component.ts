import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-six-level-two',
  templateUrl: './screen-six-level-two.component.html',
  styleUrls: ['./screen-six-level-two.component.css']
})
export class ScreenSixLevelTwoComponent implements OnInit {

  resultados: string[] = [];
  acertos: number = 0;
  erros: number = 0;
  estrelasPreenchidas: number = 0;
  estrelasVazias: number = 0;
  mensagemFinal: string = '';

  constructor() { }

  ngOnInit(): void {
    this.resultados = JSON.parse(localStorage.getItem('resultados') || '[]');
    this.acertos = this.resultados.filter(resultado => resultado === 'acerto').length;
    this.erros = this.resultados.filter(resultado => resultado === 'erro').length;
    this.calcularEstrelas();
    this.definirMensagemFinal();
  }

  // Método para calcular as estrelasPreenchidas
  calcularEstrelas(): void {
    const totalEstrelas = 5; // Total de estrelasPreenchidas a serem exibidas

    // Calcula a proporção de acertos e erros
    const proporcaoAcertos = this.acertos / (this.acertos + this.erros);

    // Calcula a quantidade de estrelasPreenchidas amarelas e brancas
    this.estrelasPreenchidas = Math.round(totalEstrelas * proporcaoAcertos);
    this.estrelasVazias = totalEstrelas - this.estrelasPreenchidas;
  }

  definirMensagemFinal(): void {
    if (this.estrelasPreenchidas === 5) {
      this.mensagemFinal = 'Incrível! Você acertou tudo!';
    } else if (this.estrelasPreenchidas === 4) {
      this.mensagemFinal = 'Muito bom! Quase perfeito!';
    } else if (this.estrelasPreenchidas === 3) {
      this.mensagemFinal = 'Bom trabalho! Continue praticando!';
    } else if (this.estrelasPreenchidas === 2) {
      this.mensagemFinal = 'Você está no caminho certo! Vamos melhorar!';
    } else {
      this.mensagemFinal = 'Tudo é aprendizagem! Tente novamente!';
    }
  }

   // Array de estrelasPreenchidas
   getArray(length: number): any[] {
    return new Array(length);
  }

  ngOnDestroy(): void {
    localStorage.removeItem('resultados'); // Remove os resultados do localStorage
  }

}
