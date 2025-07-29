import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MessagesService } from '../../services/messages/messages-service';
import { LanguageSelection } from '../../components/language-selection/language-selection';
import { LevelButton } from '../../components/buttons/level-button/level-button';
import { CommonModule } from '@angular/common';
import { FooterSelectionLevel } from '../../components/footer-selection-level/footer-selection-level';

interface Level{
  title: string;
  subtitle: string;
  srcImage: string;
  router: string;
}

@Component({
  selector: 'app-level-selection',
  standalone: true,
  imports: [TranslateModule, LanguageSelection, LevelButton, CommonModule, FooterSelectionLevel],
  templateUrl: './level-selection.html',
  styleUrl: './level-selection.scss',
})

export class LevelSelection implements OnInit {

  levelsButtons: Level[] = [];

  constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.messagesService
      .getMessages('levelSelection.buttonsLevels')
      .subscribe((messages) => {
        this.levelsButtons = messages;
      });
  }
}
