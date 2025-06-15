import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-one-level-three',
  templateUrl: './screen-one-level-three.component.html',
  styleUrls: ['./screen-one-level-three.component.css']
})
export class ScreenOneLevelThreeComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
