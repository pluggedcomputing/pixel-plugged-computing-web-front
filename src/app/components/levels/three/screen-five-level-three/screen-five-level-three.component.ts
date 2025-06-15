import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-five-level-three',
  templateUrl: './screen-five-level-three.component.html',
  styleUrls: ['./screen-five-level-three.component.css']
})
export class ScreenFiveLevelThreeComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
