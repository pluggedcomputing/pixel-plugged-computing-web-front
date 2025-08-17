import { Component } from '@angular/core';
import { CardHostComponent } from '../../../components/card-host/card-host';
import { ExitButtonComponent } from '../../../components/buttons/exit-button/exit-button';

@Component({
  selector: 'app-level-4',
  standalone: true,
  imports: [CardHostComponent, ExitButtonComponent],
  templateUrl: './level-4.html',
  styleUrl: './level-4.scss',
})
export class Level4Component {
  level: string = '4';
}
