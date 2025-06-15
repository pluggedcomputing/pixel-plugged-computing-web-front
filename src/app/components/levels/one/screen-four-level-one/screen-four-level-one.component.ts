import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-four-level-one',
  templateUrl: './screen-four-level-one.component.html',
  styleUrls: ['./screen-four-level-one.component.css']
})
export class ScreenFourLevelOneComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
