import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { ToastService } from '../../toast.service';
import { Question } from 'src/app/models/question.model';
import { QuestionsService } from 'src/app/service/question/questions.service';
import { SessionStorageService } from 'src/app/service/session-storage/session-storage-service.service';
import { MessagesService } from 'src/app/service/messages/messages.service';


@Component({
  selector: 'app-screen-four-level-two',
  templateUrl: './screen-four-level-two.component.html',
  styleUrls: ['./screen-four-level-two.component.css'],
})
export class ScreenFourLevelTwoComponent implements OnInit {

  @ViewChild(NotificationComponent) notification!: NotificationComponent;

  // alternativas
  answers: string[] = ["W", "G", "M", "Q"];

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
  rowWords: string[] = ["1,0,0,0,1", "0,1,1,1,1", "0,1,0,0,1", "0,1,1,0,1", "1,0,0,0,1"];

  buttonClasses: { [key: number]: string } = {
    1: "",
    2: "",
    3: "",
    4: "",
  };

  primeiraTentativa: boolean = true;

  /// Variáveis para o DB
  idUser: string = ""
  idApp: string = "WEB-PIXEL 1.0"
  phaseActivity: string = "2"
  numberActivity: string = "2";
  typeOfQuestion: string = "MULTIPLA ESCOLHA"
  expectedResponse: string = "G"
  dateResponse: Date;
  ///

  constructor(private router: Router,
    public toastService: ToastService,
    private questionsService: QuestionsService,
    private sessionStorageService: SessionStorageService,
    private messagesService: MessagesService
  ) {
    this.dateResponse = new Date();
    this.grid = this.initialCoordinates.map((row) => row.map((value) => value === 0));
  }

  ngOnInit(): void {
    this.answers.sort(() => Math.random() - 0.5);
    this.idUser = this.sessionStorageService.getItem('userID') || 'Default Data';
  }

  // mudar cor quadrado
  toggleCell(rowIndex: number, cellIndex: number): void {
    this.grid[rowIndex][cellIndex] = !this.grid[rowIndex][cellIndex];
  }

  // validar resposta
  changeAnswers(value: string, btn: number): void {
    if (value === "G") {
      if (this.primeiraTentativa) {
        this.salvarResultado('acerto'); // Salva o resultado como acerto
      } else {
        this.salvarResultado('erro'); // Salva o resultado como erro
      }
      this.processQuestionResponse(value, true);
      this.buttonClass(btn, true);
      this.onSuccess();
      setTimeout(() => {
        this.router.navigate(['fase-2-5']);
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
    this.notification.respostaCerta();
  }

  // resposta errada
  onError(): void {
    this.notification.respostaErrada();
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