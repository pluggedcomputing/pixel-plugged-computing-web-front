import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-eleven-level-one',
  templateUrl: './screen-eleven-level-one.component.html',
  styleUrls: ['./screen-eleven-level-one.component.css']
})
export class ScreenElevenLevelOneComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
