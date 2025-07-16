import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { ToastService } from '../../toast.service';
import { MatrizService } from 'src/app/service/matriz/matriz.service';
import { MessagesService } from 'src/app/service/messages/messages.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-screen-nine-level-four',
  templateUrl: './screen-nine-level-four.component.html',
  styleUrls: ['./screen-nine-level-four.component.css'],
})
export class ScreenNineLevelFourComponent implements OnInit {

  @ViewChild(NotificationComponent) notification!: NotificationComponent;

  // alternativas
  answers: string[] = [];

  // Matriz de cores (inicialmente todos brancos)
  grid: string[][] = Array.from({ length: 5 }, () => Array(5).fill('white'));

  // Paleta de cores disponíveis
  paletteColors: string[] = ['black', 'white', 'red', 'green', 'blue'];

  // Cor selecionada (inicialmente preta)
  selectedColor: string = 'black';

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
  }

  ngOnInit(): void {
    this.answers.sort(() => Math.random() - 0.5);
    this.translate.get('level4.exercises.exercice3.alternatives').subscribe((text) => {
      this.answers = text;
    });
  }

  // Selecionar cor da paleta
  selectColor(color: string): void {
    this.selectedColor = color;
  }

  // Pintar quadrado da matriz
  paintCell(rowIndex: number, cellIndex: number): void {
    this.grid[rowIndex][cellIndex] = this.selectedColor;
  }

  // validar resposta
  changeAnswers(value: string, btn: number): void {
    if (value === "Concluir" || value === "Finish") {
      this.matrizService.salvarMatrizCorolida(this.grid);
      this.buttonClass(btn, true);
      setTimeout(() => {
        this.router.navigate(['fase-4-10']);
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