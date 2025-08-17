import { Component } from '@angular/core';
import { LanguageSelectionComponent } from '../../components/language-selection/language-selection';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LanguageSelectionComponent, TranslateModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
