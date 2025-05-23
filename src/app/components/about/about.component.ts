import { Component } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  messages: any = {};


  constructor(private messagesService: MessagesService) {
    this.messagesService.getMensagens().subscribe(data => {
      this.messages = data;
    });

    this.messagesService.carregarMensagens();
  }

}
