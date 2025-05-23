import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private mensagens$ = new BehaviorSubject<any>({}); // Inicializa com um objeto vazio
  private language: string = "pt-br";

  constructor(private http: HttpClient) {}

  carregarMensagens() {
    this.http.get(`assets/${this.language}.json`).subscribe(data => {
      this.mensagens$.next(data); // Notifica todos os subscribers
    });
  }

  trocarIdioma(newLanguage: string): void {
    if (newLanguage !== this.language) {
      this.language = newLanguage;
      this.carregarMensagens();
    }
  }

  getMensagens() {
    return this.mensagens$.asObservable(); // Retorna um Observable para ser subscrito
  }
}