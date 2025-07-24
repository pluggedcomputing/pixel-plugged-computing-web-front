import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MessagesService } from '../../services/messages/messages-service';

@Component({
  selector: 'app-language-selection',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './language-selection.html',
  styleUrl: './language-selection.scss'
})
export class LanguageSelection {

  constructor(private messages: MessagesService){
  }

  changelanguage(language: string){
    this.messages.setLanguage(language);
  }
  
}