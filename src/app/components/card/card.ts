import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class CardComponent {
  @Input() title: string | undefined;
  @Input() imgUrl: string | undefined;
  @Input() text: string | undefined;
}
