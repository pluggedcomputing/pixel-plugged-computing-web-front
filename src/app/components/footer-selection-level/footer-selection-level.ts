import { Component } from '@angular/core';
import { FooterButton } from '../buttons/footer-button/footer-button';
import { CommonModule } from '@angular/common';
import { MessagesService } from '../../services/messages/messages-service';

interface buttonFooter {
  title: string;
  srcImage: string;
  router: string;
}

@Component({
  selector: 'app-footer-selection-level',
  standalone: true,
  imports: [FooterButton, CommonModule],
  templateUrl: './footer-selection-level.html',
  styleUrl: './footer-selection-level.scss',
})
export class FooterSelectionLevel {
  footerButtons: buttonFooter[] = [];

  constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.messagesService
      .getMessages('levelSelection.buttonsFooter')
      .subscribe((buttons) => {
        this.footerButtons = buttons;
      });
  }
}
