import { Component } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-level-selection',
  templateUrl: './level-selection.component.html',
  styleUrls: ['./level-selection.component.css']
})
export class LevelSelectionComponent {

  messages: any = {};

  constructor(private messagesService: MessagesService) {
    this.messagesService.getMensagens().subscribe(data => {
      this.messages = data;
    });

    this.messagesService.carregarMensagens();
  }

}
