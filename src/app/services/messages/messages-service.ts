import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  
    constructor(private translate: TranslateService) {
      const languageSave = localStorage.getItem('language') || 'pt-br';
      translate.setDefaultLang('pt-br');
      translate.use(languageSave);
    }
  
    setLanguage(language: string) {
      this.translate.use(language);
      localStorage.setItem('language', language);
    }

    getMessages(messages: string){
      return this.translate.get(messages);
    }
  
}
