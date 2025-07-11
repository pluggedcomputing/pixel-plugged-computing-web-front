import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationComponent } from '../../../notification/notification.component';
import { ToastService } from '../../toast.service';
import { MatrizService } from 'src/app/service/matriz/matriz.service';
import { MessagesService } from 'src/app/service/messages/messages.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-screen-five-level-four',
  templateUrl: './screen-five-level-four.component.html',
  styleUrls: ['./screen-five-level-four.component.css'],
})
export class ScreenFiveLevelFourComponent implements OnInit {

  @ViewChild(NotificationComponent) notification!: NotificationComponent;

  // alternativas
  answers: string[] = [];

  grid: boolean[][];

  rectangleStatus: boolean[][] = Array.from({ length: 5 }, () => Array(5).fill(false));

  // matriz inicial
  initialCoordinates: number[][] = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ];

  // cordenadas das linhas

  buttonClasses: { [key: number]: string } = {
    1: "",
    2: "",
    3: "",
    4: "",
  };

  primeiraTentativa: boolean = true;

  constructor(private router: Router,
    public toastService: ToastService,
    private matrizService: MatrizService,
    private messagesService: MessagesService,
    private translate: TranslateService
  ) {
    this.grid = this.initialCoordinates.map((row) => row.map((value) => value === 0));
  }

  ngOnInit(): void {
    this.translate.get('level4.exercises.exercice1.alternatives').subscribe((text) => {
      this.answers = text;
    });
  }

  // mudar cor quadrado
  toggleCell(rowIndex: number, cellIndex: number): void {
    this.grid[rowIndex][cellIndex] = !this.grid[rowIndex][cellIndex];
  }

  // validar resposta
  changeAnswers(value: string, btn: number): void {
    if (value === "Concluir" || value === "Finish") {
      this.matrizService.salvarMatrizPintada(this.grid);
      this.buttonClass(btn, true);
      setTimeout(() => {
        this.router.navigate(['fase-4-6']);
      }, 1000);
    } else {
      this.primeiraTentativa = false; // Marca que já houve uma tentativa
      this.buttonClass(btn, false);
    }
  }

  // botões alternativas
  buttonClass(button: number, status: boolean): void {
    this.buttonClasses[button] = status ? "correct" : "incorrect";
    setTimeout(() => {
      this.buttonClasses[button] = "";
    }, 1000);
  }

}