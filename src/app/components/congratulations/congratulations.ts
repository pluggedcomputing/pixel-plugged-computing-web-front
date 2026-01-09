import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MessagesService } from '../../services/messages/messages-service';
import { TranslateModule } from '@ngx-translate/core';
import { Footer } from '../../models/button-footer.model';
import { FooterSelectionLevelComponent } from '../footer-selection-level/footer-selection-level';
import { ButtonForm } from '../buttons/button-form/button-form';

@Component({
  selector: 'app-congratulations',
  standalone: true,
  imports: [TranslateModule, FooterSelectionLevelComponent, ButtonForm],
  templateUrl: './congratulations.html',
  styleUrl: './congratulations.scss',
})
export class Congratulations implements OnInit, OnDestroy {
  private msssagesService = inject(MessagesService);

  @Input() level: string | undefined;

  type = 'level';

  @Input() footers: Footer[] | undefined;

  @Output() isRemake = new EventEmitter<string>();

  private responsesUser: string[] = [];
  corrects: number = 0;
  incorrects: number = 0;
  messageForUser: string = '';
  private messagesCongratulationsList: string[] = [];

  onIsRemake(value: string) {
    this.isRemake.emit(value);
  }

  ngOnInit(): void {
    this.responsesUser = JSON.parse(
      localStorage.getItem('responsesUser') || '[]'
    );
    this.corrects = this.responsesUser.filter(
      (resultado) => resultado === 'correct'
    ).length;
    this.incorrects = this.responsesUser.filter(
      (resultado) => resultado === 'incorrect'
    ).length;
    this.setStarsUser();
    this.msssagesService
      .getMessages('congratulationsScreen.motivationalMessages')
      .subscribe((messages) => {
        this.messagesCongratulationsList = messages;
      });
    this.setFinalMessage();

    // verifica se é o ultimo nível
    if (this.isLastLevel()) {
      this.messageForUser = '';
    }
  }

  setStarsUser() {
    const totalStars = 5;

    const proporcion = this.corrects / (this.corrects + this.incorrects);

    this.corrects = Math.round(totalStars * proporcion);
    this.incorrects = totalStars - this.corrects;
  }

  setFinalMessage() {
    switch (this.corrects) {
      case 5:
        this.messageForUser = this.messagesCongratulationsList[0];
        break;
      case 4:
        this.messageForUser = this.messagesCongratulationsList[1];
        break;
      case 3:
        this.messageForUser = this.messagesCongratulationsList[2];
        break;
      case 2:
        this.messageForUser = this.messagesCongratulationsList[3];
        break;
      default:
        this.messageForUser = this.messagesCongratulationsList[4];
    }
  }

  getArrayStar(length: number): any[] {
    return new Array(length);
  }

  ngOnDestroy(): void {
    localStorage.removeItem('responsesUser');
  }

  isLastLevel(): boolean {
    if (this.level == 'Fase 5' || this.level == 'Level 5') {
      return true;
    } else {
      return false;
    }
  }
}
