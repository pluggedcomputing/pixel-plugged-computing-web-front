import { inject, Injectable } from '@angular/core';
import { MessagesService } from '../messages/messages-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadImagesService {
  private messageService = inject(MessagesService);

  private components: string[] = [
    'levelSelection.buttonsLevels',
    'levelSelection.footer',
    'level1.screens',
    'level2.screens',
    'level3.screens',
    'level4.screens',
    'level5.screens',
    'moreImgUrl',
    'moreButtonUrl'
  ];

  private preloadImages(component: string) {
    this.messageService.getMessages(component).subscribe((cards: any[]) => {
      cards.forEach((card) => {
        if (card.imgUrl) {
          const img = new Image();
          img.src = card.imgUrl;
        }
      });
    });
  }

  preloadImgComponents() {
    this.components.forEach((component) => {
      this.preloadImages(component);
    });
    console.log('Preloading Images...');
  }
}
