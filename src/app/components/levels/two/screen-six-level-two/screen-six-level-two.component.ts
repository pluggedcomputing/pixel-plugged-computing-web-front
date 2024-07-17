import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-six-level-two',
  templateUrl: './screen-six-level-two.component.html',
  styleUrls: ['./screen-six-level-two.component.css']
})
export class ScreenSixLevelTwoComponent implements OnInit {

  grid: boolean[][];

  // Coordenadas iniciais
  initialCoordinates: number[][] = [
    [0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0]
  ];

  rowWords: string[] = ["0,1,1,1,0", "0,1,1,1,0", "0,1,0,1,0", "0,0,1,0,0", "0,1,1,1,0"];


  constructor() {
    this.grid = this.initialCoordinates.map(row => row.map(value => value === 0));
   }

  ngOnInit(): void {
  }

  toggleCell(rowIndex: number, cellIndex: number): void {
    // Função agora não altera a cor dos quadrados
  }
  
}
