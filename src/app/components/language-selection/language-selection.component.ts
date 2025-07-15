import { Component } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-language-selection',
  templateUrl: './language-selection.component.html',
  styleUrls: ['./language-selection.component.scss'],
})
export class LanguageSelectionComponent {

  constructor(private messagesService: MessagesService) { }

  setLanguageEn() {
    this.messagesService.setLanguage("en")
  }

  setLanguagePtBr() {
    this.messagesService.setLanguage("pt-br")
  }

}
