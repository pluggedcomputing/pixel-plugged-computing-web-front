import { Component, inject } from '@angular/core';
import { FooterButtonComponent } from '../buttons/footer-button/footer-button';
import { CommonModule } from '@angular/common';
import { MessagesService } from '../../services/messages/messages-service';
import { Footer } from '../../models/button-footer.model';

@Component({
  selector: 'app-footer-selection-level',
  standalone: true,
  imports: [FooterButtonComponent, CommonModule],
  templateUrl: './footer-selection-level.html',
  styleUrl: './footer-selection-level.scss',
})
export class FooterSelectionLevelComponent {
  private messagesService = inject(MessagesService);

  buttonFooterList: Footer[] = [];

  ngOnInit(): void {
    this.messagesService
      .getMessages('levelSelection.buttonsFooter')
      .subscribe((buttons) => {
        this.buttonFooterList = buttons;
      });
  }
}
