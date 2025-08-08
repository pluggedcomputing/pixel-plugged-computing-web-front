import { Component, inject, Input } from '@angular/core';
import { MessagesService } from '../../../services/messages/messages-service';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-level-button',
  standalone: true,
  imports: [TranslateModule, MatIcon],
  templateUrl: './level-button.html',
  styleUrl: './level-button.scss',
})
export class LevelButton {
  private messagesService = inject(MessagesService);
  private routerLink = inject(Router);

  @Input() title: string | undefined;
  @Input() subTitle: string | undefined;
  @Input() imageSrc: string | undefined;
  @Input() router: string | undefined;

  navigateTo() {
    this.routerLink.navigate([this.router]);
  }
}
