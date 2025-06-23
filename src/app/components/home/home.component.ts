import { Component } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private messagesService: MessagesService) {
  }

  changeLanguageToEnglish() {
    this.messagesService.setLanguage('en');
  }

  changeLanguageToPortuguese() {
    this.messagesService.setLanguage('pt-br');
  }

}