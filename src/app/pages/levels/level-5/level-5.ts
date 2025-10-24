import { Component } from '@angular/core';
import { CardHostComponent } from '../../../components/card-host/card-host';

@Component({
  selector: 'app-level-5',
  standalone: true,
  imports: [CardHostComponent],
  templateUrl: './level-5.html',
  styleUrl: './level-5.scss',
})
export class Level5Component {
  level: string = '5';
}
