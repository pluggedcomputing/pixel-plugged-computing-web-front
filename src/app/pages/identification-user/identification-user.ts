import { Component } from '@angular/core';
import { UserInputService } from '../../services/user/user-input-service';
import { Router } from '@angular/router';
import { SessionStorageService } from '../../services/session-storage/session-storage-service';
import { MessagesService } from '../../services/messages/messages-service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-identification-user',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './identification-user.html',
  styleUrl: './identification-user.scss'
})
export class IdentificationUser {

  userID: string = "";
  submitted: boolean = false;

  constructor(
    private userInputService: UserInputService,
    private router: Router,
    private sessionStorageService: SessionStorageService,
    private messagesService: MessagesService
  ) {
  }

  submitUserID() {
    if (!this.userID) {
      this.submitted = true;
      return;
    }
    const user: User = { userID: this.userID };
    this.userInputService.userID = this.userID;
    this.userInputService.saveUser(user).subscribe(
      response => {
        this.sessionStorageService.setItem('userID', this.userID);
        console.log("User saved successfully:", response);
      },
      error => {
        console.error("Error saving user:", error);
        alert("Houve um erro ao se conectar, você está usando o sistema offline!");
      }
    );
    console.log(this.userID);
    this.router.navigate(['/fases']);
  }

  submitUserAnonymous() {
    const user: User = { userID: "Anonymous" };
    this.userInputService.userID = "Anonymous";
    this.userInputService.saveUser(user).subscribe(
      response => {
        this.sessionStorageService.setItem('userID', "Anonymous");
        console.log("User saved successfully:", response);

      },
      error => {
        console.error("Error saving user:", error);
        alert("Houve um erro ao se conectar, você está usando o sistema offline!");
      }
    );
    console.log("Anonymous");
    this.router.navigate(['/fases']);
  }

}
