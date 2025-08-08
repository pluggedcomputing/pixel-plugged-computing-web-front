import { Component } from '@angular/core';
import { CardHost } from '../../../components/card-host/card-host';
import { ExitButton } from '../../../components/buttons/exit-button/exit-button';

@Component({
  selector: 'app-level-3',
  standalone: true,
  imports: [CardHost, ExitButton],
  templateUrl: './level-3.html',
  styleUrl: './level-3.scss',
})
export class Level3 {
  level: string = '3';
}
