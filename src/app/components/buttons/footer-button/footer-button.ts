import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-footer-button',
  standalone: true,
  imports: [TranslateModule, NgClass],
  templateUrl: './footer-button.html',
  styleUrl: './footer-button.scss',
})
export class FooterButtonComponent {
  private router = inject(Router);
  @Input() type: string | undefined;

  @Input() title: string | undefined;
  @Input() imgUrl: string | undefined;
  @Input() route: string | undefined;
  @Output() isRemake = new EventEmitter<string>();

  navigateTo() {
    this.isRemake.emit(this.title);
    this.router.navigate([this.route]);
  }
}
