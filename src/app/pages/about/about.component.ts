import { Component } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private messagesService: MessagesService) {

  }

}
