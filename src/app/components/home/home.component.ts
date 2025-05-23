import { Component } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  messages: any = {};

  constructor(private messagesService: MessagesService) {
    this.messagesService.getMensagens().subscribe(data => {
      this.messages = data; // Atualiza sempre que o serviço emite novos dados
    });

    this.messagesService.carregarMensagens(); // Inicia o carregamento
  }

  trocarIdiomaPortugues() {
    this.messagesService.trocarIdioma("pt-br");
  }

  trocarIdiomaIngles() {
    this.messagesService.trocarIdioma("en");
  }
}