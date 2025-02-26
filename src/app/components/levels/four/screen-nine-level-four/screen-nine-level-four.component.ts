import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationComponent } from '../../../notification/notification.component';
import { ToastService } from '../../toast.service';
import { Question } from 'src/app/models/question.model';
import { QuestionsService } from 'src/app/service/question/questions.service';
import { SessionStorageService } from 'src/app/service/session-storage/session-storage-service.service';
import { MatrizService } from 'src/app/service/matriz/matriz.service';

@Component({
  selector: 'app-screen-nine-level-four',
  templateUrl: './screen-nine-level-four.component.html',
  styleUrls: ['./screen-nine-level-four.component.css'],
})
export class ScreenNineLevelFourComponent implements OnInit {

  @ViewChild(NotificationComponent) notification!: NotificationComponent;

  // alternativas
  answers: string[] = ["Concluir"];

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

  // Variáveis para o DB
  idUser: string = ""
  idApp: string = "WEB-PIXEL 1.0"
  phaseActivity: string = "4"
  numberActivity: string = "3";
  typeOfQuestion: string = "PINTAR"
  expectedResponse: string = "Concluir"
  dateResponse: Date;

  constructor(private router: Router,
    public toastService: ToastService,
    private questionsService: QuestionsService,
    private sessionStorageService: SessionStorageService,
    private matrizService: MatrizService
  ) {
    this.dateResponse = new Date();
  }

  ngOnInit(): void {
    this.idUser = this.sessionStorageService.getItem('userID') || 'Default Data';
    this.answers.sort(() => Math.random() - 0.5);
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
    if (value === "Concluir") {
      if (this.primeiraTentativa) {
        this.salvarResultado('acerto'); // Salva o resultado como acerto
      } else {
        this.salvarResultado('erro'); // Salva o resultado como erro
      }
      this.matrizService.salvarMatrizCorolida(this.grid);
      this.processQuestionResponse(value, true);
      this.buttonClass(btn, true);
      this.onSuccess();
      setTimeout(() => {
        this.router.navigate(['fase-4-10']);
      }, 1000);
    } else {
      this.processQuestionResponse(value, false);
      this.primeiraTentativa = false; // Marca que já houve uma tentativa
      this.buttonClass(btn, false);
      this.onError();
    }
  }

  processQuestionResponse(userResponse: string, isCorrect: boolean): void {
    const question: Question = new Question(this.idUser, this.idApp, this.phaseActivity, this.numberActivity, userResponse, this.expectedResponse, isCorrect, this.dateResponse, this.typeOfQuestion);
    this.questionsService.saveResponseQuestion(question).subscribe(
      response => {
        console.log("Question saved successfully:", response);
      },
      error => {
        console.error("Error saving question:", error);
      }
    );
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