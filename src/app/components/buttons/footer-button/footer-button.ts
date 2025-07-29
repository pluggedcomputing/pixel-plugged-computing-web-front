import { Component, Input } from '@angular/core';
import { MessagesService } from '../../../services/messages/messages-service';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-button',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer-button.html',
  styleUrl: './footer-button.scss',
})
export class FooterButton {
  constructor(
    private messagesService: MessagesService,
    private routerLink: Router
  ) {}

  @Input() title: string | undefined;
  @Input() imageSrc: string | undefined;
  @Input() router: string | undefined;

  navigateTo() {
    this.routerLink.navigate([this.router]);
  }
}
