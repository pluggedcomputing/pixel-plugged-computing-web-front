import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MessagesService } from '../../services/messages/messages-service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFoundComponent {
  private messagesService = inject(MessagesService);
  private router = inject(Router);

  navigateTo() {
    this.router.navigate(['/home']);
  }
}
