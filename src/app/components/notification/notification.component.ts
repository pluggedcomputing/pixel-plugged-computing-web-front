import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';
import { TranslateService } from '@ngx-translate/core';

interface Notification {
  message: string;
  type: string;
  icon: string;
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})

export class NotificationComponent implements OnInit {

  notifications: Notification[] = [];

  mensages: string[] = [];

  constructor(
    private messagesService: MessagesService,
    private translate: TranslateService
  ) { }

    ngOnInit(): void {
      this.translate.get('notifications').subscribe((text) => {
      this.mensages = text;
    });
    }

  // Lança a notificação dependendo do tipo e define a duração
  show(message: string, type: string, duration: number = 3000): void {
    let icon: string;

    // Define o ícone baseado no tipo de notificação
    if (type === "acerto") {
      icon = '✔';
    } else {
      icon = '✖'
    }

    const notification: Notification = { message, type, icon };
    this.notifications.push(notification);

    // Remove a notificação após a duração especificada
    setTimeout(() => this.remove(notification), duration);
  }

  remove(notification: Notification): void {
    this.notifications = this.notifications.filter(n => n !== notification);
  }

  respostaCerta(): void {
    this.show(this.mensages[0], 'acerto');
  }

  respostaErrada(): void {
    this.show(this.mensages[1], 'erro');
  }

}
