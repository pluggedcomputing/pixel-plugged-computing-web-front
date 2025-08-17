import { Component, inject, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-level-button',
  standalone: true,
  imports: [TranslateModule, MatIcon],
  templateUrl: './level-button.html',
  styleUrl: './level-button.scss',
})
export class LevelButtonComponent {
  private router = inject(Router);

  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() imgUrl: string | undefined;
  @Input() route: string | undefined;

  navigateTo() {
    this.router.navigate([this.route]);
  }
}
