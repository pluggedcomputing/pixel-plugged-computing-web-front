import { Component } from '@angular/core';
import { CardHost } from '../../../components/card-host/card-host';
import { ExitButton } from '../../../components/buttons/exit-button/exit-button';

@Component({
  selector: 'app-level-4',
  standalone: true,
  imports: [CardHost, ExitButton],
  templateUrl: './level-4.html',
  styleUrl: './level-4.scss',
})
export class Level4 {
  level: string = '4';
}
