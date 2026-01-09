import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ExitButtonComponent } from '../../components/buttons/exit-button/exit-button';
import { MessagesService } from '../../services/messages/messages-service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule, ExitButtonComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  private messagesService = inject(MessagesService);
}
