import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-five-level-one',
  templateUrl: './screen-five-level-one.component.html',
  styleUrls: ['./screen-five-level-one.component.css']
})
export class ScreenFiveLevelOneComponent implements OnInit {

  rectangleStatus: boolean[] = [false, false, false, false, false];
  numbers: number[] = [1, 1, 1, 1, 1];

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

  toggleRectangle(index: number): void {
    this.rectangleStatus[index - 1] = !this.rectangleStatus[index - 1];
    if (this.rectangleStatus[index - 1]) {
      this.numbers[index - 1] = 0;
    } else {
      this.numbers[index - 1] = 1;
    }
  }
}
