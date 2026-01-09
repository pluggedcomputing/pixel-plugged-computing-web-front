import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MessagesService } from '../../services/messages/messages-service';

@Component({
  selector: 'app-language-selection',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './language-selection.html',
  styleUrl: './language-selection.scss',
})
export class LanguageSelectionComponent {
  private messagesService = inject(MessagesService);

  changelanguage(language: string) {
    this.messagesService.setLanguage(language);
    window.location.reload();
  }
}
