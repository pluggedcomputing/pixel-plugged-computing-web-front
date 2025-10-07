import { Component, inject, OnInit } from '@angular/core';
import { Notification } from '../../models/notification.model';
import { MessagesService } from '../../services/messages/messages-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NgClass],
  templateUrl: './notification.html',
  styleUrl: './notification.scss',
})
export class NotificationComponent implements OnInit {
  private messagesService = inject(MessagesService);

  notificationList: Notification[] = [];
  messagesList: string[] = [];

  ngOnInit(): void {
    this.messagesService.getMessages('notifications').subscribe((messages) => {
      this.messagesList = messages;
    });
  }

  private show(message: string, type: string, duration: number = 1500): void {
    this.notificationList = [];
    let icon: string;

    if (type === 'correct') {
      icon = '✔';
    } else {
      icon = '✖';
    }

    const notification: Notification = { message, type, icon };
    this.notificationList.push(notification);

    setTimeout(() => this.remove(notification), duration);
  }

  private remove(notification: Notification): void {
    this.notificationList = this.notificationList.filter(
      (n) => n !== notification
    );
  }

  correctNotification(): void {
    this.show(this.messagesList[0], 'correct');
  }

  incorrectNotification(): void {
    this.show(this.messagesList[1], 'incorrect');
  }
}
