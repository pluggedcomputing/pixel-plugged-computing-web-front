import { Component } from '@angular/core';

interface Notification {
  message: string;
  type: 'success' | 'error' | 'info';
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  notifications: Notification[] = [];
// lança a notifação dependendo do tipo, e define duração
  show(message: string, type: 'success' | 'error' | 'info', duration: number = 3000): void {
    const notification = { message, type };
    this.notifications.push(notification);

    setTimeout(() => this.remove(notification), duration);
  }

  remove(notification: Notification): void {
    this.notifications = this.notifications.filter(n => n !== notification);
  }
}
