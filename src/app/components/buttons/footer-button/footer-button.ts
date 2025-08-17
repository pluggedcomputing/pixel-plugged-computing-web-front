import { Component, inject, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-button',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer-button.html',
  styleUrl: './footer-button.scss',
})
export class FooterButtonComponent {
  private router = inject(Router);

  @Input() title: string | undefined;
  @Input() imgUrl: string | undefined;
  @Input() route: string | undefined;

  navigateTo() {
    this.router.navigate([this.route]);
  }
}
