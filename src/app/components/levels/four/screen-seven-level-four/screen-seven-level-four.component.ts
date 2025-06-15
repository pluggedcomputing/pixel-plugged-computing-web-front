import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-seven-level-four',
  templateUrl: './screen-seven-level-four.component.html',
  styleUrls: ['./screen-seven-level-four.component.css']
})
export class ScreenSevenLevelFourComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
