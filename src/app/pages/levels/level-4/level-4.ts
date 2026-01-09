import { Component } from '@angular/core';
import { CardHostComponent } from '../../../components/card-host/card-host';

@Component({
  selector: 'app-level-4',
  standalone: true,
  imports: [CardHostComponent],
  templateUrl: './level-4.html',
  styleUrl: './level-4.scss',
})
export class Level4Component {
  level: string = '4';
}
