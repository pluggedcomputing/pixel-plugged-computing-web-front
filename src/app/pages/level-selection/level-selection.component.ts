import { Component, ViewChild } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';
import { LanguageSelectionComponent } from '../../components/language-selection/language-selection.component';

@Component({
  selector: 'app-level-selection',
  templateUrl: './level-selection.component.html',
  styleUrls: ['./level-selection.component.css']
})
export class LevelSelectionComponent {

  @ViewChild(LanguageSelectionComponent) languageSelectionComponent!: LanguageSelectionComponent;

  constructor(private messagesService: MessagesService) {

  }

    mudarIdiomaIngles() {
    this.messagesService.changeEn();
  }

  mudarIdiomaPortugues() {
    this.messagesService.changePtbr();
  }

}
