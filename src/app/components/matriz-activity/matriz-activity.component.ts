import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatrizService } from '../../services/matriz/matriz-service';
import { AnswerHostComponent } from "../answer-host/answer-host";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-matriz-activity',
  standalone: true,
  imports: [AnswerHostComponent, NgClass],
  templateUrl: './matriz-activity.component.html',
  styleUrl: './matriz-activity.component.scss',
})
export class MatrizActivityComponent {
  @Output() buttonClicked = new EventEmitter<string>();
  @Input() text: string | undefined;

  correct!: string;
  answers!: string[];
  rows!: string[];
  pixels!: number[][];

  matrizService = inject(MatrizService);

  ngOnInit() {
    this.pixels = this.matrizService.getMatriz();
    this.correct = this.matrizService.getLinhaMatriz(1);
    this.rows = [
      '?',
      this.matrizService.getLinhaMatriz(2),
      this.matrizService.getLinhaMatriz(3),
      this.matrizService.getLinhaMatriz(4),
      this.matrizService.getLinhaMatriz(5),
    ];
    this.answers = ['4-1,1-0', '1-1,1-0,3-1', '1-0,2-1,2-0'];

    // verifica se já existe a alternativa correta
    this.answers.push(
      this.answers.includes(this.correct) ? '3-1,2-0' : this.correct,
    );
  }

  onButtonClicked(value: string) {
    this.buttonClicked.emit(value);
  }
}
