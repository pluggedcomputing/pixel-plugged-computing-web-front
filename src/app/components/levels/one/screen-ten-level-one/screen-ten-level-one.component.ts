import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationComponent } from '../../../notification/notification.component';

@Component({
  selector: 'app-screen-ten-level-one',
  templateUrl: './screen-ten-level-one.component.html',
  styleUrls: ['./screen-ten-level-one.component.css'],
})
export class ScreenTenLevelOneComponent implements OnInit {

  @ViewChild(NotificationComponent) notification!: NotificationComponent;

  // alternativas
  answers: string[] = ["Como representação que economize a quantidade de dados enviada", "Usando pontos pretos como 0 e brancos como 1"];


  buttonClasses: { [key: number]: string } = {
    1: "",
    2: "",
    3: "",
    4: "",
  };

  primeiraTentativa: boolean = true;


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.answers.sort(() => Math.random() - 0.5);
  }

  // validar resposta
  changeAnswers(value: string, btn: number): void {
    if (value === "Como representação que economize a quantidade de dados enviada") {
      if(this.primeiraTentativa){
        this.salvarResultado('acerto'); // Salva o resultado como acerto
      }else{
        this.salvarResultado('erro'); // Salva o resultado como erro
      }
      this.buttonClass(btn, true);
      this.onSuccess();
      setTimeout(() => {
        this.router.navigate(['fase-1-11']);
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