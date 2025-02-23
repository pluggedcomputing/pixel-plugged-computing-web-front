import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-eleven-level-three',
  templateUrl: './screen-eleven-level-three.component.html',
  styleUrls: ['./screen-eleven-level-three.component.css']
})
export class ScreenElevenLevelThreeComponent implements OnInit {

  resultados: string[] = [];
  acertos: number = 0;
  erros: number = 0;
  estrelasAmarelas: number = 0;
  estrelasBrancas: number = 0;
  mensagemFinal: string = '';

  constructor() { }

  ngOnInit(): void {
    this.resultados = JSON.parse(localStorage.getItem('resultados') || '[]');
    this.acertos = this.resultados.filter(resultado => resultado === 'acerto').length;
    this.erros = this.resultados.filter(resultado => resultado === 'erro').length;
    this.calcularEstrelas();
    this.definirMensagemFinal();
  }

   // Array de estrelas
   getArray(length: number): any[] {
    return new Array(length);
  }

    // Método para calcular as estrelas
    calcularEstrelas(): void {
      const totalEstrelas = 5; // Total de estrelas a serem exibidas
  
      // Calcula a proporção de acertos e erros
      const proporcaoAcertos = this.acertos / (this.acertos + this.erros);
  
      // Calcula a quantidade de estrelas amarelas e brancas
      this.estrelasAmarelas = Math.round(totalEstrelas * proporcaoAcertos);
      this.estrelasBrancas = totalEstrelas - this.estrelasAmarelas;
    }
  
    definirMensagemFinal(): void {
      if (this.estrelasAmarelas === 5) {
        this.mensagemFinal = 'Incrível! Você acertou tudo!';
      } else if (this.estrelasAmarelas === 4) {
        this.mensagemFinal = 'Muito bom! Quase perfeito!';
      } else if (this.estrelasAmarelas === 3) {
        this.mensagemFinal = 'Bom trabalho! Continue praticando!';
      } else if (this.estrelasAmarelas === 2) {
        this.mensagemFinal = 'Você está no caminho certo! Vamos melhorar!';
      } else {
        this.mensagemFinal = 'Tudo é aprendizagem! Tente novamente!';
      }
    }

  ngOnDestroy(): void {
    localStorage.removeItem('resultados'); // Remove os resultados do localStorage
  }

}
