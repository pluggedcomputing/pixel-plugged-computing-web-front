import { NgClass } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatrizService } from '../../services/matriz/matriz-service';
import { AnswerHostComponent } from '../answer-host/answer-host';

@Component({
  selector: 'app-matriz-colorida-user',
  standalone: true,
  imports: [NgClass, AnswerHostComponent],
  templateUrl: './matriz-colorida-user.html',
  styleUrl: './matriz-colorida-user.scss',
})
export class MatrizColoridaUser {
  @Output() buttonClicked = new EventEmitter<string>();
  @Input() text: string | undefined;

  correct!: string;
  answers!: string[];
  pixels!: number[][];

  matrizService = inject(MatrizService);

  ngOnInit() {
    this.pixels = this.matrizService.getMatrizColor();
    this.correct = this.matrizService.getLinhaMatrizColor(1);

    this.answers = ['1-2,3-3,1-1', '4-4,1-3', '1-2,2-0,2-4', this.correct];
  }

  black: number = 0;
  white: number = 1;
  red: number = 2;
  blue: number = 3;
  green: number = 4;

  pallet: number[] = [0, 1, 2, 3, 4];

  color: number = 0;

  onButtonClicked(value: string) {
    this.buttonClicked.emit(value);
  }
}
