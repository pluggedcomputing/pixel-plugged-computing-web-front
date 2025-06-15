import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-one-level-two',
  templateUrl: './screen-one-level-two.component.html',
  styleUrls: ['./screen-one-level-two.component.css']
})
export class ScreenOneLevelTwoComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
