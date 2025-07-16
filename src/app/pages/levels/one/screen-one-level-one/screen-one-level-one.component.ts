import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-one-level-one',
  templateUrl: './screen-one-level-one.component.html',
  styleUrls: ['./screen-one-level-one.component.css']
})
export class ScreenOneLevelOneComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
