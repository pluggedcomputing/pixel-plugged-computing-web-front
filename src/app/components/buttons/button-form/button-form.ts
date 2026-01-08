import { Component, inject, Input } from '@angular/core';
import { MessagesService } from '../../../services/messages/messages-service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-button-form',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './button-form.html',
  styleUrl: './button-form.scss',
})
export class ButtonForm {
  private messagesService = inject(MessagesService);
}
