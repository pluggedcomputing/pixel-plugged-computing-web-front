import { MessagesService } from 'src/app/service/messages/messages.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-screen-thirteen-level-one',
  templateUrl: './screen-thirteen-level-one.component.html',
  styleUrls: ['./screen-thirteen-level-one.component.css']
})
export class ScreenThirteenLevelOneComponent implements OnInit {

  resultados: string[] = [];
  acertos: number = 0;
  erros: number = 0;
  estrelasPreenchidas: number = 0;
  estrelasVazias: number = 0;

  mensagemFinal: string = "";

  mensagens: string[] = [];

  constructor(
    public toastService: ToastService,
    private messagesService: MessagesService,
    private translate: TranslateService) { }

  ngOnInit(): void {
    this.resultados = JSON.parse(localStorage.getItem('resultados') || '[]');
    this.acertos = this.resultados.filter(resultado => resultado === 'acerto').length;
    this.erros = this.resultados.filter(resultado => resultado === 'erro').length;
    this.calcularEstrelas();
    this.translate.get('congratulationsScreen.motivationalMessages').subscribe((text) => {
      this.mensagens = text;
    });
    this.definirMensagemFinal();
  }

  // Método para calcular as estrelas
  calcularEstrelas(): void {
    const totalEstrelas = 5; // Total de estrelas a serem exibidas

    // Calcula a proporção de acertos e erros
    const proporcaoAcertos = this.acertos / (this.acertos + this.erros);

    // Calcula a quantidade de estrelas amarelas e brancas
    this.estrelasPreenchidas = Math.round(totalEstrelas * proporcaoAcertos);
    this.estrelasVazias = totalEstrelas - this.estrelasPreenchidas;
  }

  definirMensagemFinal(): void {

    switch (this.estrelasPreenchidas) {
      case 5: this.mensagemFinal = this.mensagens[0];
        break;
      case 4: this.mensagemFinal = this.mensagens[1];
        break;
      case 3: this.mensagemFinal = this.mensagens[2];
        break;
      case 2: this.mensagemFinal = this.mensagens[3];
        break;
      default: this.mensagemFinal = this.mensagens[4];
    }

  }

  // Array de estrelas
  getArray(length: number): any[] {
    return new Array(length);
  }

  ngOnDestroy(): void {
    localStorage.removeItem('resultados'); // Remove os resultados do localStorage
  }

}
