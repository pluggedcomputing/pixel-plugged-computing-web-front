import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-three-level-three',
  templateUrl: './screen-three-level-three.component.html',
  styleUrls: ['./screen-three-level-three.component.css']
})
export class ScreenThreeLevelThreeComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
