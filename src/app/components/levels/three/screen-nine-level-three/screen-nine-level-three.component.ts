import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationComponent } from '../../../notification/notification.component';

@Component({
  selector: 'app-screen-nine-level-three',
  templateUrl: './screen-nine-level-three.component.html',
  styleUrls: ['./screen-nine-level-three.component.css'],
})
export class ScreenNineLevelThreeComponent implements OnInit {

  @ViewChild(NotificationComponent) notification!: NotificationComponent;

  // alternativas
  answers: string[] = ["1,1,1,2", "0,1,2,1,1", "0,2,1,2", "0,3,2"];

  grid: boolean[][];

  rectangleStatus: boolean[][] = Array.from({ length: 5 }, () => Array(5).fill(false));

  // matriz inicial
  initialCoordinates: number[][] = [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [0, 1, 0, 1, 1],
    [0, 0, 0, 1, 1],
  ];

  // cordenadas das linhas
  rowWords: string[] = ["0,3,1", "2,1,2", "2,1,2", "0,1,1,1,2", "?,?,?,?,?"];

  buttonClasses: { [key: number]: string } = {
    1: "",
    2: "",
    3: "",
    4: "",
  };

  primeiraTentativa: boolean = true;

  constructor(private router: Router) {
    this.grid = this.initialCoordinates.map((row) => row.map((value) => value === 0));
  }

  ngOnInit(): void {
    this.answers.sort(() => Math.random() - 0.5);
  }

  // mudar cor quadrado
  toggleCell(rowIndex: number, cellIndex: number): void {
    this.grid[rowIndex][cellIndex] = !this.grid[rowIndex][cellIndex];
  }

  // validar resposta
  changeAnswers(value: string, btn: number): void {
    if (value === "0,3,2") {
      if(this.primeiraTentativa){
        this.salvarResultado('acerto'); // Salva o resultado como acerto
      }else{
        this.salvarResultado('erro'); // Salva o resultado como erro
      }
      this.buttonClass(btn, true);
      this.onSuccess();
      setTimeout(() => {
        this.router.navigate(['fase-3-10']);
      }, 1000);
    } else {
      this.buttonClass(btn, false);
      this.onError();
      this.primeiraTentativa = false; // Marca que já houve uma tentativa
    }
  }

  // resposta certa
  onSuccess(): void {
    this.notification.show('Você acertou!', 'success');
  }

  // resposta errada
  onError(): void {
    this.notification.show('Tente outra vez.', 'error');
  }

  // botões alternativas
  buttonClass(button: number, status: boolean): void {
    this.buttonClasses[button] = status ? "correct" : "incorrect";
    setTimeout(() => {
      this.buttonClasses[button] = "";
    }, 1000);
  }

   // Salvar resultado no localStorage
   salvarResultado(resultado: string): void {
    const resultados = JSON.parse(localStorage.getItem('resultados') || '[]');
    resultados.push(resultado);
    localStorage.setItem('resultados', JSON.stringify(resultados));
  }

}