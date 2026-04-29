import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PixelsExample } from "../../pixels-example/pixels-example";

@Component({
  selector: 'app-card-example-matriz',
  standalone: true,
  templateUrl: './card-example-matriz.component.html',
  styleUrl: './card-example-matriz.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PixelsExample]
})
export class CardExampleMatrizComponent {
  @Input() title: string | undefined;
  @Input() text: string | undefined;
}
