import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-seven-level-one',
  templateUrl: './screen-seven-level-one.component.html',
  styleUrls: ['./screen-seven-level-one.component.css']
})
export class ScreenSevenLevelOneComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
