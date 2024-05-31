import { ToastService } from '../../toast.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-screen-twelve-level-one',
  templateUrl: './screen-twelve-level-one.component.html',
  styleUrls: ['./screen-twelve-level-one.component.css'],
})
export class ScreenTwelveLevelOneComponent implements OnInit {

  rectangles: boolean[] = [true, false, true, false, true];

  flip1: string = 'inactive';
  flip2: string = 'active';
  flip4: string = 'active';
  flip8: string = 'inactive';
  flip16: string = 'active';

  byn1: number = 1;
  byn2: number = 0;
  byn4: number = 0;
  byn8: number = 1;
  byn16: number = 0;

  btnClass1: string = "";
  btnClass2: string = "";
  btnClass3: string = "";
  btnClass4: string = "";

  attempts: number = 0;

  question: string = "Considerando o que foi apresentado, responda: O que as máquinas de fax fazem?";

  answers: string[] = ["Realizam operações matemáticas","Imprimem pixels","Editam imagens","Transmitem mensagens de áudio"];

  constructor(private router: Router, public toastService: ToastService) {

  }

  ngOnInit(): void {
    this.answers.sort(() => Math.random() - 0.5);
  }

  changeAnswers(value: string, btn: number): void {
    if(value === "Imprimem pixels") {
        this.buttonClass(btn, true);
        this.toastService.show('Você acertou!');
        setTimeout(() => {
          this.router.navigate(['fase-1-13']);
        },1000);
    } else {
        this.buttonClass(btn, false);
    }
  }

  pickAnswer(answer: string): void {
    if(answer != "Imprimem pixels") {
      this.toastService.show('Tente outra vez.');
      this.attempts += 1;
      console.log(this.attempts);
    }
  }

  buttonClass(button: number, status: boolean): void {
    if(button == 1) {
      this.btnClass1 = status ? "correct" : "incorrect";
      setTimeout(() => {this.btnClass1 = "";},1000);
    }
    if(button == 2) {
      this.btnClass2 = status ? "correct" : "incorrect";
      setTimeout(() => {this.btnClass2 = "";},1000);
    }
    if(button == 3) {
      this.btnClass3 = status ? "correct" : "incorrect";
      setTimeout(() => {this.btnClass3 = "";},1000);
    }
    if(button == 4) {
      this.btnClass4 = status ? "correct" : "incorrect";
      setTimeout(() => {this.btnClass4 = "";},1000);
    }

  }

}