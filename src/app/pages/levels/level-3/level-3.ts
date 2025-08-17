import { Component } from '@angular/core';
import { CardHostComponent } from '../../../components/card-host/card-host';
import { ExitButtonComponent } from '../../../components/buttons/exit-button/exit-button';

@Component({
  selector: 'app-level-3',
  standalone: true,
  imports: [CardHostComponent, ExitButtonComponent],
  templateUrl: './level-3.html',
  styleUrl: './level-3.scss',
})
export class Level3Component {
  level: string = '3';
}
