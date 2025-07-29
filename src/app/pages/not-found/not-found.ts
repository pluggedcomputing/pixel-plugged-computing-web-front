import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MessagesService } from '../../services/messages/messages-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  constructor(
    private messagesService: MessagesService,
    private router: Router
  ) {}

  navigateTo() {
    this.router.navigate(['/home']);
  }
}
