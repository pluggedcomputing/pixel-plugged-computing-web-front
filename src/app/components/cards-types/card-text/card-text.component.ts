import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-text',
  standalone: true,
  templateUrl: './card-text.component.html',
  styleUrl: './card-text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTextComponent {
  @Input() title: string | undefined;
  @Input() imgUrl?: string | undefined;
  @Input() text: string | undefined;
}
