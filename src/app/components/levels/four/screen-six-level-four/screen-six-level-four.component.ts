import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationComponent } from '../../../notification/notification.component';
import { ToastService } from '../../toast.service';
import { Question } from 'src/app/models/question.model';
import { QuestionsService } from 'src/app/service/question/questions.service';
import { SessionStorageService } from 'src/app/service/session-storage/session-storage-service.service';
import { MatrizService } from 'src/app/service/matriz/matriz.service';
import { MessagesService } from 'src/app/service/messages/messages.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-screen-six-level-four',
  templateUrl: './screen-six-level-four.component.html',
  styleUrls: ['./screen-six-level-four.component.css'],
})
export class ScreenSixLevelFourComponent implements OnInit {

  @ViewChild(NotificationComponent) notification!: NotificationComponent;

  // alternativas
  answers: string[] = this.answersVerify();

  answersVerify() {
    const answersList: string[] = ["0,1,1,2,1", "1,1,3", "4,1", this.matrizService.obterLinhaComoString(1)];
    for (let i = 0; i < 3; i++) {
      if (answersList[i] === this.matrizService.obterLinhaComoString(1)) {
        answersList[3] = "1,2,2";
      }
    }
    return answersList;
  }

  // matriz inicial
  matrizPintada: boolean[][] = [];

  primeiraLinhaString: string = "";

  // cordenadas das linhas
  rowWords: string[] = ['', this.matrizService.obterLinhaComoString(2), this.matrizService.obterLinhaComoString(3), this.matrizService.obterLinhaComoString(4), this.matrizService.obterLinhaComoString(5)];

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
  phaseActivity: string = "4"
  numberActivity: string = "1";
  typeOfQuestion: string = "MULTIPLA ESCOLHA"
  expectedResponse: string = this.matrizService.obterLinhaComoString(1)
  dateResponse: Date;
  ///

  constructor(private router: Router,
    public toastService: ToastService,
    private questionsService: QuestionsService,
    private sessionStorageService: SessionStorageService,
    private matrizService: MatrizService,
    private messagesService: MessagesService,
    private translate: TranslateService
  ) {
    this.dateResponse = new Date();
    this.matrizPintada = this.matrizService.obterMatrizPintada();
  }

  ngOnInit(): void {
    this.idUser = this.sessionStorageService.getItem('userID') || 'Default Data';
    this.answers.sort(() => Math.random() - 0.5);
  }

  // validar resposta
  changeAnswers(value: string, btn: number): void {
    if (value === this.matrizService.obterLinhaComoString(1)) {
      if (this.primeiraTentativa) {
        this.salvarResultado('acerto'); // Salva o resultado como acerto
      } else {
        this.salvarResultado('erro'); // Salva o resultado como erro
      }
      this.processQuestionResponse(value, true);
      this.buttonClass(btn, true);
      this.onSuccess();
      setTimeout(() => {
        this.router.navigate(['fase-4-7']);
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