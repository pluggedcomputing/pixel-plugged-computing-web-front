import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MessagesService } from '../../services/messages/messages-service';
import { LanguageSelectionComponent } from '../../components/language-selection/language-selection';
import { LevelButtonComponent } from '../../components/buttons/level-button/level-button';
import { CommonModule } from '@angular/common';
import { FooterSelectionLevelComponent } from '../../components/footer-selection-level/footer-selection-level';
import { ButtonLevel } from '../../models/button-level.model';
import { Footer } from '../../models/button-footer.model';

@Component({
  selector: 'app-level-selection',
  standalone: true,
  imports: [
    TranslateModule,
    LanguageSelectionComponent,
    LevelButtonComponent,
    CommonModule,
    FooterSelectionLevelComponent,
  ],
  templateUrl: './level-selection.html',
  styleUrl: './level-selection.scss',
})
export class LevelSelectionComponent implements OnInit {
  private messagesService = inject(MessagesService);

  footers: Footer[] = [];

  buttonLevelList: ButtonLevel[] = [];

  ngOnInit(): void {
    this.messagesService
      .getMessages('levelSelection.buttonsLevels')
      .subscribe((messages) => {
        this.buttonLevelList = messages;
        // this.preloadImages(this.buttonLevelList);
      });
    this.messagesService
      .getMessages('levelSelection.footer')
      .subscribe((footer) => {
        this.footers = footer;
        // this.preloadImages(this.footers);
      });
  }

  // preloadImages(input: any[]): void {
  //   input.forEach((card) => {
  //     if (card.imgUrl) {
  //       const img = new Image();
  //       img.src = card.imgUrl;
  //       console.log('Preloading:', card.imgUrl);
  //     }
  //   });
  // }
}
