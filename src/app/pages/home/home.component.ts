import { Component, ViewChild } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';
import { LanguageSelectionComponent } from '../../components/language-selection/language-selection.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  @ViewChild(LanguageSelectionComponent) languageSelectionComponent!: LanguageSelectionComponent;

  constructor(private messagesService: MessagesService) {

  }

}