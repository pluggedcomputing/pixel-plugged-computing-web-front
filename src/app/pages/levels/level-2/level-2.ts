import { Component } from '@angular/core';
import { CardHost } from '../../../components/card-host/card-host';
import { ExitButton } from '../../../components/buttons/exit-button/exit-button';

@Component({
  selector: 'app-level-2',
  standalone: true,
  imports: [CardHost, ExitButton],
  templateUrl: './level-2.html',
  styleUrl: './level-2.scss',
})
export class Level2 {
  level: string = '2';
}
