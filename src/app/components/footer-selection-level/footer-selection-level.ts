import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FooterButtonComponent } from '../buttons/footer-button/footer-button';
import { CommonModule } from '@angular/common';
import { Footer } from '../../models/button-footer.model';

@Component({
  selector: 'app-footer-selection-level',
  standalone: true,
  imports: [FooterButtonComponent, CommonModule],
  templateUrl: './footer-selection-level.html',
  styleUrl: './footer-selection-level.scss',
})
export class FooterSelectionLevelComponent {
  @Input() footers: Footer[] | undefined;
  @Input() typeButton: string | undefined;
  @Output() isRemake = new EventEmitter<string>();

  onIsRemake(value: string) {
    this.isRemake.emit(value);
  }
}
