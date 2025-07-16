import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-four-level-four',
  templateUrl: './screen-four-level-four.component.html',
  styleUrls: ['./screen-four-level-four.component.css']
})
export class ScreenFourLevelFourComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
