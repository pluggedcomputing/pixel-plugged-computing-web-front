import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-two-level-four',
  templateUrl: './screen-two-level-four.component.html',
  styleUrls: ['./screen-two-level-four.component.css']
})
export class ScreenTwoLevelFourComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
