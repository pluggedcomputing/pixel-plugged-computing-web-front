import { Component, Input } from '@angular/core';
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
}
