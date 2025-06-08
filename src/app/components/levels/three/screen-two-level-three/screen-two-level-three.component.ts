import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-two-level-three',
  templateUrl: './screen-two-level-three.component.html',
  styleUrls: ['./screen-two-level-three.component.css']
})
export class ScreenTwoLevelThreeComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
