import { Component } from '@angular/core';

interface Notification {
  message: string;
  type: 'success' | 'error' | 'info';
  icon: string;
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  notifications: Notification[] = [];

  // Lança a notificação dependendo do tipo e define a duração
  show(message: string, type: 'success' | 'error' | 'info', duration: number = 3000): void {
    let icon: string;

    // Define o ícone baseado no tipo de notificação
    if (type === 'success') {
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
}
