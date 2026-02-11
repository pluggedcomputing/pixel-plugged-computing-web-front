import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatrizService } from '../../services/matriz/matriz-service';
import { AnswerHostComponent } from "../answer-host/answer-host";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-matriz-activity',
  standalone: true,
  imports: [NgClass],
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
    this.correct = this.matrizService.getResponse();
    this.rows = [
      '?',
      this.matrizService.getLinhaMatriz(2),
      this.matrizService.getLinhaMatriz(3),
      this.matrizService.getLinhaMatriz(4),
      this.matrizService.getLinhaMatriz(5),
    ];
  }

  onButtonClicked(value: string) {
    this.buttonClicked.emit(value);
  }
}
