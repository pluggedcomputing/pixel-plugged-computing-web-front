import { Injectable } from '@angular/core';
import { Screen } from '../../models/screen.model';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  private screens: Screen[] = [
    {
      id: 1,
      title: 'Bem-vindo',
      imgUrl: 'https://example.com/images/welcome.png',
      text: 'Explore o aplicativo e descubra suas funcionalidades.',
    },
    {
      id: 2,
      title: 'Perfil',
      imgUrl: 'https://example.com/images/profile.png',
      text: 'Gerencie suas informações pessoais com facilidade.',
    },
    {
      id: 3,
      title: 'Configurações',
      imgUrl: 'https://example.com/images/settings.png',
      text: 'Personalize o aplicativo de acordo com suas preferências.',
    },
    {
      id: 4,
      title: 'Ajuda',
      text: 'Encontre respostas para as dúvidas mais comuns.',
    },
    {
      id: 5,
      title: 'Notificações',
      imgUrl: 'https://example.com/images/notifications.png',
      text: 'Mantenha-se informado com alertas e mensagens.',
    },
    {
      id: 6,
      title: 'Tarefas',
      imgUrl: 'https://example.com/images/tasks.png',
      text: 'Organize e acompanhe suas atividades diárias.',
    },
    {
      id: 7,
      title: 'Mensagens',
      imgUrl: 'https://example.com/images/messages.png',
      text: 'Converse com seus colegas e compartilhe informações.',
    },
    {
      id: 8,
      title: 'Dashboard',
      imgUrl: 'https://example.com/images/dashboard.png',
      text: 'Visualize seus dados de maneira clara e intuitiva.',
    },
    {
      id: 9,
      title: 'Sobre',
      text: 'Saiba mais sobre o aplicativo e sua proposta.',
    },
    {
      id: 10,
      title: 'Sair',
      imgUrl: 'https://example.com/images/logout.png',
      text: 'Encerre sua sessão com segurança.',
    },
  ];

  getScreens(): Screen[] {
    return this.screens;
  }

  getScreensById(id: number): Screen | undefined {
    return this.screens.find((p) => p.id === id);
  }
}
