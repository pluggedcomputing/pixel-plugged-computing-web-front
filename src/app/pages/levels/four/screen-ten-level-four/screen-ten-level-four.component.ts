import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { ToastService } from '../../toast.service';
import { Question } from 'src/app/models/question.model';
import { QuestionsService } from 'src/app/service/question/questions.service';
import { SessionStorageService } from 'src/app/service/session-storage/session-storage-service.service';
import { MatrizService } from 'src/app/service/matriz/matriz.service';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-ten-level-four',
  templateUrl: './screen-ten-level-four.component.html',
  styleUrls: ['./screen-ten-level-four.component.css'],
})
export class ScreenTenLevelFourComponent implements OnInit {

  @ViewChild(NotificationComponent) notification!: NotificationComponent;

  // alternativas

  answers: string[] = this.answersVerify();

  answersVerify() {
    const answersList: string[] = ["1-0,2-1,2-0", "1-0,3-1,1-0", "4-0,1-1", this.matrizService.obterLinhaComoStringColorida(1)];
    for (let i = 0; i < 3; i++) {
      if (answersList[i] === this.matrizService.obterLinhaComoStringColorida(1)) {
        answersList[3] = "3-2,1-4,1-0";
      }
    }
    return answersList;
  }

  // matriz inicial
  matrizPintada: String[][] = [];

  primeiraLinhaString: string = "";

  // cordenadas das linhas
  rowWords: string[] = ['', this.matrizService.obterLinhaComoStringColorida(2), this.matrizService.obterLinhaComoStringColorida(3), this.matrizService.obterLinhaComoStringColorida(4), this.matrizService.obterLinhaComoStringColorida(5)];

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

  /// Variáveis para o DB
  idUser: string = ""
  idApp: string = "WEB-PIXEL 1.0"
  phaseActivity: string = "4"
  numberActivity: string = "2";
  typeOfQuestion: string = "MULTIPLA ESCOLHA"
  expectedResponse: string = this.matrizService.obterLinhaComoStringColorida(1)
  dateResponse: Date;
  ///

  constructor(private router: Router,
    public toastService: ToastService,
    private questionsService: QuestionsService,
    private sessionStorageService: SessionStorageService,
    private matrizService: MatrizService,
    private messagesService: MessagesService,
  ) {
    this.dateResponse = new Date();
    this.matrizPintada = this.matrizService.obterMatrizColorida();
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
    this.matrizPintada[rowIndex][cellIndex] = this.selectedColor;
  }

  // validar resposta
  changeAnswers(value: string, btn: number): void {
    if (value === this.matrizService.obterLinhaComoStringColorida(1)) {
      if (this.primeiraTentativa) {
        this.salvarResultado('acerto'); // Salva o resultado como acerto
      } else {
        this.salvarResultado('erro'); // Salva o resultado como erro
      }
      this.processQuestionResponse(value, true);
      this.buttonClass(btn, true);
      this.onSuccess();
      setTimeout(() => {
        this.router.navigate(['fase-4-11']);
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