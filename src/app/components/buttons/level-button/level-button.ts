import { Component, Input } from '@angular/core';
import { MessagesService } from '../../../services/messages/messages-service';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level-button',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './level-button.html',
  styleUrl: './level-button.scss',
})
export class LevelButton {
  constructor(
    private messagesService: MessagesService,
    private routerLink: Router
  ) {}
  @Input() title: string | undefined;
  @Input() subTitle: string | undefined;
  @Input() imageSrc: string | undefined;
  @Input() router: string | undefined;

  navigateTo() {
    this.routerLink.navigate([this.router]);
  }
}
