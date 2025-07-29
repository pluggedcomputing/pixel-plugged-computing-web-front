import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MessagesService } from '../../services/messages/messages-service';
import { ExitButton } from '../../components/buttons/exit-button/exit-button';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [TranslateModule, ExitButton],
  templateUrl: './help.html',
  styleUrl: './help.scss',
})
export class Help {
  constructor(private messagesService: MessagesService) {}
}
