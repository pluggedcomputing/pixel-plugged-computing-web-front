import { Component } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-level-selection',
  templateUrl: './level-selection.component.html',
  styleUrls: ['./level-selection.component.css']
})
export class LevelSelectionComponent {

  constructor(private messagesService: MessagesService) {

  }

    mudarIdiomaIngles() {
    this.messagesService.changeEn();
  }

  mudarIdiomaPortugues() {
    this.messagesService.changePtbr();
  }

}
