import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-exit-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './exit-button.html',
  styleUrl: './exit-button.scss'
})
export class ExitButton {

}
