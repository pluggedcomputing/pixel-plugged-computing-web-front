import { Component } from '@angular/core';
import { CardHostComponent } from '../../../components/card-host/card-host';

@Component({
  selector: 'app-level-2',
  standalone: true,
  imports: [CardHostComponent],
  templateUrl: './level-2.html',
  styleUrl: './level-2.scss',
})
export class Level2Component {
  level: string = '2';
}
