import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-two-level-one',
  templateUrl: './screen-two-level-one.component.html',
  styleUrls: ['./screen-two-level-one.component.css']
})
export class ScreenTwoLevelOneComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
