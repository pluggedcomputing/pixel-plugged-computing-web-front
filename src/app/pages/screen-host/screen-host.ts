import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ScreenContent } from '../../components/screen-content/screen-content';
import { ActivatedRoute } from '@angular/router';
import { ScreenService } from '../../services/screen/screen-service';
import { Screen } from '../../models/screen.model';

@Component({
  selector: 'app-screen-host',
  standalone: true,
  imports: [CommonModule, ScreenContent],
  templateUrl: './screen-host.html',
  styleUrl: './screen-host.scss',
})
export class ScreenHost implements OnInit {
  private route = inject(ActivatedRoute);
  private screenService = inject(ScreenService);

  screenUse: Screen | undefined;

  ngOnInit(): void {
    // Pega o 'id' da URL (ex: de /curso/2, pega o '2')
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        // Converte o id para número e busca os dados no serviço
        this.screenUse = this.screenService.getScreensById(+id);
      }
    });
  }
}
