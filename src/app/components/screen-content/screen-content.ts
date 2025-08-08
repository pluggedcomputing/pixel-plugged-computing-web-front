import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Screen } from '../../models/screen.model';

@Component({
  selector: 'app-screen-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screen-content.html',
  styleUrl: './screen-content.scss',
})
export class ScreenContent {
  @Input() screen!: Screen;
}
