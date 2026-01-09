import { Component } from '@angular/core';
import { CardHostComponent } from '../../../components/card-host/card-host';

@Component({
  selector: 'app-level-3',
  standalone: true,
  imports: [CardHostComponent],
  templateUrl: './level-3.html',
  styleUrl: './level-3.scss',
})
export class Level3Component {
  level: string = '3';
}
