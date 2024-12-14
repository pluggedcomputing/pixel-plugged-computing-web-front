import { ToastService } from '../../toast.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-nine-level-three',
  templateUrl: './screen-nine-level-three.component.html',
  styleUrls: ['./screen-nine-level-three.component.css'],
})
export class ScreenNineLevelThreeComponent implements OnInit {

  // Estado inicial dos quadrados e variáveis relacionadas
  rectangles: boolean[] = [true, false, true, false, true];

  byn1: number = 1;
  byn2: number = 0;
  byn4: number = 0;
  byn8: number = 1;
  byn16: number = 0;

  attempts: number = 0;

  question: string = "Agora vamos praticar? Pinte a imagem representada pelos códigos acima e escolha a letra representada pelo código. Lembre-se de que o 1 é branco e o 0 é preto.";

  answers: string[] = ["1,1,1,2", "0,1,2,1,1", "0,2,1,2", "0,3,2"];

  rectangleStatus: boolean[][] = Array.from({ length: 5 }, () => Array(5).fill(false));

  // Coordenadas iniciais do grid
  initialCoordinates: number[][] = [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [0, 1, 0, 1, 1],
    [0, 0, 0, 1, 1]
  ];

  rowWords: string[] = ["0,3,1", "2,1,2", "2,1,2", "0,1,1,1,2", "?,?,?,?,?"];

  grid: boolean[][];

  constructor(private router: Router, public toastService: ToastService) {
    // Inicializa o grid com base nas coordenadas iniciais
    this.grid = this.initialCoordinates.map(row => row.map(value => value === 0));
  }

  ngOnInit(): void {
    // Embaralha as respostas ao iniciar
    this.answers.sort(() => Math.random() - 0.5);
  }

  // Alterna o estado de um quadrado no grid
  toggleCell(rowIndex: number, cellIndex: number): void {
    this.grid[rowIndex][cellIndex] = !this.grid[rowIndex][cellIndex];
  }

  // Valida as respostas e navega para a próxima fase se correta
  changeAnswers(value: string, btn: number): void {
    if (value === "0,3,2") {
      this.buttonClass(btn, true);
      setTimeout(() => {
        this.router.navigate(['fase-3-10']);
      }, 1000);
    } else {
      this.buttonClass(btn, false);
    }
  }

  // Exibe mensagem de erro e incrementa as tentativas
  pickAnswer(answer: string): void {
    if (answer !== '0,3,2') {
      this.toastService.show('Tente outra vez', { classname: 'toast-danger', delay: 3000 });
      this.attempts += 1;
    } else {
      this.toastService.show('Você acertou!', { classname: 'toast-success', delay: 3000 });
    }
  }

  buttonClasses: { [key: number]: string } = {
    1: "",
    2: "",
    3: "",
    4: "",
  };
  
  buttonClass(button: number, status: boolean): void {
    this.buttonClasses[button] = status ? "correct" : "incorrect";
    setTimeout(() => {
      this.buttonClasses[button] = "";
    }, 1000);
  }
  

  // Alterna o estado de um quadrado específico
  toggleRectangle(row: number, col: number): void {
    this.rectangleStatus[row][col] = !this.rectangleStatus[row][col];
  }
}