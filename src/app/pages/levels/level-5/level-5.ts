import { Component } from '@angular/core';
import { ExitButtonComponent } from '../../../components/buttons/exit-button/exit-button';
import { CardHostComponent } from '../../../components/card-host/card-host';

@Component({
  selector: 'app-level-5',
  standalone: true,
  imports: [ExitButtonComponent, CardHostComponent], 
  templateUrl: './level-5.html',
  styleUrl: './level-5.scss',
})
export class Level5Component {
  level: string = '5';
}
