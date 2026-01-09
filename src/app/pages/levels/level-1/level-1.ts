import { Component } from '@angular/core';
import { CardHostComponent } from '../../../components/card-host/card-host';

@Component({
  selector: 'app-level-1',
  standalone: true,
  imports: [CardHostComponent],
  templateUrl: './level-1.html',
  styleUrl: './level-1.scss',
})
export class Level1Component {
  level: string = '1';
}
