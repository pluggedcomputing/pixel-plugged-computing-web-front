import { ToastService } from '../../toast.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-screen-six-level-three',
  templateUrl: './screen-six-level-three.component.html',
  styleUrls: ['./screen-six-level-three.component.css'],
})
export class ScreenSixLevelThreeComponent implements OnInit {

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

  question: string = "Agora vamos praticar? pinte a imagem representada pelos códigos acima e escolha a letra representada pelo código. lembre-se de que o 1 é branco e o 0 é preto.";

  answers: string[] = ["L","K","I","J"];

  rectangleStatus: boolean[][] = Array.from({ length: 5 }, () => Array(5).fill(false));
  
  //novo
  grid: boolean[][] = Array.from({ length: 5 }, () => Array(5).fill(false));
  rowWords: string[] = ["1,1,3", "1,1,3", "1,1,3", "1,1,3", "1,3,1"];

  toggleCell(rowIndex: number, cellIndex: number): void {
    this.grid[rowIndex][cellIndex] = !this.grid[rowIndex][cellIndex];
  }

  constructor(private router: Router, public toastService: ToastService) {

  }

  ngOnInit(): void {
    this.answers.sort(() => Math.random() - 0.5);
  }

  toggleFlip(card: number): void {
    if(card == 1) {
      this.flip1 = (this.flip1 == 'inactive') ? 'active' : 'inactive';
    } else if(card == 2) {
      this.flip2 = (this.flip2 == 'inactive') ? 'active' : 'inactive';
    } else if(card == 4) {
      this.flip4 = (this.flip4 == 'inactive') ? 'active' : 'inactive';
    } else if(card == 8) {
      this.flip8 = (this.flip8 == 'inactive') ? 'active' : 'inactive';
    } else if(card == 16) {
      this.flip16 = (this.flip16 == 'inactive') ? 'active' : 'inactive';
    }
    this.toggleBynaries();
  }

  changeAnswers(value: string, btn: number): void {
    if(value === "L") {
        this.buttonClass(btn, true);
        setTimeout(() => {
          this.router.navigate(['fase-3-7']);
        },1000);
    } else {
        this.buttonClass(btn, false);
    }
  }

  toggleBynaries():void {
    if(this.flip1 === 'active') {
      setTimeout(()=> {this.byn1 = 0;},400);
    } else {
      setTimeout(()=> {this.byn1 = 1;},400);
    }

    if(this.flip2 === 'active') {
      setTimeout(()=> {this.byn2 = 0;},400);
    } else {
      setTimeout(()=> {this.byn2 = 1;},400);
    }

    if(this.flip4 === 'active') {
      setTimeout(()=> {this.byn4 = 0;},400);
    } else {
      setTimeout(()=> {this.byn4 = 1;},400);
    }

    if(this.flip8 === 'active') {
      setTimeout(()=> {this.byn8 = 0;},400);
    } else {
      setTimeout(()=> {this.byn8 = 1;},400);
    }

    if(this.flip16 === 'active') {
      setTimeout(()=> {this.byn16 = 0;},400);
    } else {
      setTimeout(()=> {this.byn16 = 1;},400);
    }
  }

  pickAnswer(answer: string): void {
    if(answer !== "p") {
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

  toggleRectangle(row: number, col: number): void {
    this.rectangleStatus[row][col] = !this.rectangleStatus[row][col];
  }
}