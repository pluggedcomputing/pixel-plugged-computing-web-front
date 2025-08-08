import { Component } from '@angular/core';
import { CardHost } from '../../../components/card-host/card-host';
import { ExitButton } from '../../../components/buttons/exit-button/exit-button';

@Component({
  selector: 'app-level-1',
  standalone: true,
  imports: [CardHost, ExitButton],
  templateUrl: './level-1.html',
  styleUrl: './level-1.scss',
})
export class Level1 {
  level: string = '1';
}
