import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ExitButtonComponent } from '../../components/buttons/exit-button/exit-button';
import { MessagesService } from '../../services/messages/messages-service';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [TranslateModule, ExitButtonComponent],
  templateUrl: './help.html',
  styleUrl: './help.scss',
})
export class HelpComponent {
  private messagesService = inject(MessagesService);
}
