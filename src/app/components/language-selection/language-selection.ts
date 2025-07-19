import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selection',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './language-selection.html',
  styleUrl: './language-selection.scss'
})
export class LanguageSelection {

  private translate = inject(TranslateService);

  setLanguage(language: string){
    this.translate.use(language);
  }

  constructor(){
    this.translate.setDefaultLang('pt-br');
    this.translate.use('pt-br')
  }
}