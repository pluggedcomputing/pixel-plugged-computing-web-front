import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ExitButton } from '../../components/buttons/exit-button/exit-button';
import { MessagesService } from '../../services/messages/messages-service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule, ExitButton],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  constructor(private messages: MessagesService){
  }
}