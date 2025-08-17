import { Component } from '@angular/core';
import { CardHostComponent } from '../../../components/card-host/card-host';
import { ExitButtonComponent } from '../../../components/buttons/exit-button/exit-button';

@Component({
  selector: 'app-level-1',
  standalone: true,
  imports: [CardHostComponent, ExitButtonComponent],
  templateUrl: './level-1.html',
  styleUrl: './level-1.scss',
})
export class Level1Component {
  level: string = '1';
}
