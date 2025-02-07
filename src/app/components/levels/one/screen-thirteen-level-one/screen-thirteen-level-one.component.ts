import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-thirteen-level-one',
  templateUrl: './screen-thirteen-level-one.component.html',
  styleUrls: ['./screen-thirteen-level-one.component.css']
})
export class ScreenThirteenLevelOneComponent implements OnInit {

  resultados: string[] = [];
  acertos: number = 0;
  erros: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.resultados = JSON.parse(localStorage.getItem('resultados') || '[]');
    this.acertos = this.resultados.filter(resultado => resultado === 'acerto').length;
    this.erros = this.resultados.filter(resultado => resultado === 'erro').length;
  }

   // Array de estrelas
   getArray(length: number): any[] {
    return new Array(length);
  }

  ngOnDestroy(): void {
    localStorage.removeItem('resultados'); // Remove os resultados do localStorage
  }

}
