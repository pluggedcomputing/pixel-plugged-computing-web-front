import { Component, OnInit , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { NotificationComponent } from '../../../notification/notification.component';

@Component({
  selector: 'app-screen-five-level-two',
  templateUrl: './screen-five-level-two.component.html',
  styleUrls: ['./screen-five-level-two.component.css'],
})
export class ScreenFiveLevelTwoComponent implements OnInit {

  @ViewChild(NotificationComponent) notification!: NotificationComponent;

  // alternativas
  answers: string[] = ["1,1,1,0,1","1,1,0,1,0","1,1,0,0,1","0,1,1,1,0"];

  grid: boolean[][];

  rectangleStatus: boolean[][] = Array.from({ length: 5 }, () => Array(5).fill(false));

  // matriz inicial
  initialCoordinates: number[][] = [
    [0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
  ];

  // cordenadas das linhas
  rowWords: string[] = ["0,1,1,1,0", "0,1,1,1,0", "0,1,0,1,0", "0,0,1,0,0","?,?,?,?,?"];

  buttonClasses: { [key: number]: string } = {
    1: "",
    2: "",
    3: "",
    4: "",
  };

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
    if (value === "0,1,1,1,0") {
      this.buttonClass(btn, true);
      this.onSuccess();
      setTimeout(() => {
        this.router.navigate(['fase-2-6']);
      }, 1000);
    } else {
      this.buttonClass(btn, false);
      this.onError();
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
  
}