import { Component } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {

  messages: any = {};

  constructor(private messagesService: MessagesService) {
    this.messagesService.getMensagens().subscribe(data => {
      this.messages = data; // Atualiza sempre que o serviço emite novos dados
    });

    this.messagesService.carregarMensagens(); // Inicia o carregamento
  }

}
