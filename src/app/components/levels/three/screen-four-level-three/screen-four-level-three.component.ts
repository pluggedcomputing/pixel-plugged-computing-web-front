import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-four-level-three',
  templateUrl: './screen-four-level-three.component.html',
  styleUrls: ['./screen-four-level-three.component.css']
})
export class ScreenFourLevelThreeComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
