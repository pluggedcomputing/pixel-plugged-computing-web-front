import { Component } from '@angular/core';
import { LanguageSelection } from '../../components/language-selection/language-selection';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LanguageSelection],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
}
